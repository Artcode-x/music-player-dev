import {
  activeTrackSelector,
  searchSelector,
} from '../../store/selectors/selectors'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import * as S from './center-block.styles'
import sprite from '../../img/icon/sprite.svg'
import { useDispatch, useSelector } from 'react-redux'
import addTracks, {
  addActiveTrack,
  addIdTrack,
  addSetPause,
} from '../../store/actions/creators/creators'

import { useState } from 'react'
import getAllTracksFromApi, {
  addLike,
  disLike,
  getFavoriteTracks,
  refreshToken,
} from '../Api/api'

export const MusicList = ({ loading1, addError, isPlaying, setIsPlaying }) => {
  const activeTrack = useSelector(activeTrackSelector) // исп-ем знания из state/store

  const playPause = useSelector((store) => store.tracks.playPause)

  const allTracks = useSelector((store) => store.tracks.allTracks)
  console.log(allTracks)
  const [disabled, setDisabled] = useState(false) // для отключения кнопки на время обращения к апи

  const vseTrekiAndLikesTracks = useSelector((store) => store.tracks.AllandFav)

  const dispatch = useDispatch()

  const todoClick = (track) => {
    setIsPlaying(false)
    dispatch(addIdTrack({ index: track.id }))
    dispatch(addSetPause(true))
    dispatch(addActiveTrack(track))
  }

  // добавляем наш userID (чтобы смогли далее сравнивать, поставлен лайк или нет)
  const user = useSelector((store) => store.tracks.userID)

  // Достаем токены из localStorage (для дальнейшей работы с лайками)
  // parse - записать из локалсторадж tokenRefresh в tokenAccess
  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'))
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'))

  const toggleLike = async (track) => {
    try {
      setDisabled(true) // откл копку

      if (track.stared_user.find((el) => el.id === user.id)) {
        await disLike({ token: tokenAccess, id: track.id })
      } else {
        await addLike({ token: tokenAccess, id: track.id })
      }

      const response = await getAllTracksFromApi()
      dispatch(addTracks(response))
      // if (vseTrekiAndLikesTracks === 'All') {
      //   const response = await getAllTracksFromApi()
      //   dispatch(addTracks(response))
      // } else {
      //   const response = await getFavoriteTracks()
      //   dispatch(addFavoriteTracks(response))
      // }
    } catch (error) {
      console.log(error.message)
      // если токен протух по таймауту, обновляем его
      if (error.message === 'Токен протух') {
        const newAccess = await refreshToken(tokenRefresh)
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess))
        // используя уже обновленный токен newAccess, проходимся по всем трекам, уже по каждому в отдельности и ищем совпадает ли id конкретного userа с id в лайкнутых треках.
        if (track.stared_user.find((el) => el.id === user.id)) {
          await disLike({ token: newAccess, id: track.id })
        } else {
          await addLike({ token: newAccess, id: track.id })
        }
      }
    } finally {
      setDisabled(false) // вкл кнопку
    }
  }

  // const searchInputText = useSelector((store) => store.tracks.search)
  const searchInputText = useSelector(searchSelector)

  //  принимаем track.name для дальнейшего его сравнения с вводимым юзером текстом
  const searchItem = (name) => {
    if (name.toLowerCase().search(searchInputText.toLowerCase()) === -1)
      return false
    return true
  }

  // Пришел массив с сервера - отображаем целиком. Если что то введено в поисковую строку (searhUpdate) - отображаем отфильтрованный массив

  // если searchInputText = true, тогда к массиву со всеми треками allTracks применяем метод filter, который сравнивает каждый отдельный трек из массива всех треков с тем что ввел пользователь. Используем функцию searchItem, которая осуществляет сравнение
  const filteredArray = searchInputText
    ? allTracks.filter((ad) => searchItem(ad.name, searchInputText))
    : allTracks

  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        {filteredArray.map((track, index) => (
          <S.PlaylistTrack
            key={track.id}
            // search={searchItem(track.name)}
          >
            <S.TrackTitle onClick={() => todoClick(track, index)}>
              <S.TrackTitleImage>
                <RybkaForImport IamWidth="51" IamHeight="51" />

                {activeTrack ? (
                  track.id === activeTrack.id ? (
                    <S.PlayingDot playPause={playPause} />
                  ) : (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </S.TrackTitleSvg>
                  )
                ) : (
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref={`${sprite}#icon-note`} />
                  </S.TrackTitleSvg>
                )}
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink>
                  {track.name}
                  <span className="track__title-span" />
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackTitleLink>{track.author}</S.TrackTitleLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackTitleLink>{track.album}</S.TrackTitleLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackLike
                disabled={disabled}
                onClick={() => toggleLike(track)}
              >
                <S.TrackTimeSvg alt="time">
                  {/* Проходимся по всем трекам, уже по каждому в отдельности и ищем совпадает ли id конкретного userа с id в лайкнутых треках. 
                 Если трек лайкнут этим пользователем - загрузится icon-likeActive если не нашли в лайкнутых польз-ях, то будет обычная иконка icon-like */}
                  {track.stared_user.find((el) => el.id === user.id) ? (
                    <use xlinkHref={`${sprite}#icon-likeActive`} />
                  ) : (
                    <use xlinkHref={`${sprite}#icon-like`} />
                  )}
                </S.TrackTimeSvg>
              </S.TrackLike>
              <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        ))}
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}
