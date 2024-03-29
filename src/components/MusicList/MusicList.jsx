import {
  activeTrackSelector,
  filteredArrayGenreSelector,
  filteredArrayTracksSelector,
  filteredArrayYearSelector,
  searchSelector,
} from '../../store/selectors/selectors'
import SkeletSizeTempl from '../SkeletSizeTempl/SkeletSizeTempl'
import * as S from './MusicList.styled'
import sprite from '../../img/icon/sprite.svg'
import { useDispatch, useSelector } from 'react-redux'
import addTracks, {
  addActiveTrack,
  addIdTrack,
  addSetPause,
} from '../../store/actions/creators/creators'

import { useState } from 'react'
import getAllTracksFromApi, { addLike, disLike, refreshToken } from '../Api/api'
import FormatTime from '../../helpers/helpers'

export const MusicList = ({ loading1, addError, isPlaying, setIsPlaying }) => {
  const filteredByAuthor = useSelector(filteredArrayTracksSelector)
  const filteredArrayGenre = useSelector(filteredArrayGenreSelector)
  const filteredArrayYear = useSelector(filteredArrayYearSelector)
  const activeTrack = useSelector(activeTrackSelector)
  const playPause = useSelector((store) => store.tracks.playPause)
  const allTracks = useSelector((store) => store.tracks.allTracks)
  // добавляем наш userID (чтобы смогли далее сравнивать, поставлен лайк или нет)
  let user = useSelector((store) => store.tracks.userID)

  const searchInputText = useSelector(searchSelector)

  const [disabled, setDisabled] = useState(false)

  const dispatch = useDispatch()

  const todoClick = (track) => {
    setIsPlaying(false)
    dispatch(addIdTrack({ index: track.id }))
    dispatch(addSetPause(true))
    dispatch(addActiveTrack(track))
  }

  // Достаем токены из localStorage (для дальнейшей работы с лайками)
  // parse - записать из локалсторадж в const
  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'))
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'))

  const toggleLike = async (track) => {
    try {
      setDisabled(true)

      if (track.stared_user.find((el) => el.id === user.id)) {
        await disLike({ token: tokenAccess, id: track.id })
      } else {
        await addLike({ token: tokenAccess, id: track.id })
      }

      const response = await getAllTracksFromApi()
      dispatch(addTracks(response))
    } catch (error) {
      // если токен протух по таймауту, обновляем его
      if (error.message === 'Токен протух') {
        const newAccess = await refreshToken(tokenRefresh)
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess.access))
        // используя уже обновленный токен newAccess, проходимся по всем трекам, уже по каждому в отдельности и ищем совпадает ли id конкретного userа с id в лайкнутых треках.
        if (track.stared_user.find((el) => el.id === user.id)) {
          await disLike({ token: newAccess.access, id: track.id })
        } else {
          await addLike({ token: newAccess.access, id: track.id })
        }
      }
    } finally {
      setDisabled(false)
    }
  }

  // Принимаем track.name для дальнейшего его сравнения с вводимыми в поиск данными
  const searchItem = (name) => {
    if (name.toLowerCase().search(searchInputText.toLowerCase()) === -1)
      return false

    return true
  }

  // Пришел массив с сервера - отображаем целиком. Если что то введено в поисковую строку (searhUpdate) - отображаем отфильтрованный массив
  // если searchInputText = true, тогда к массиву со всеми треками allTracks применяем метод filter, который сравнивает каждый отдельный трек из массива всех треков с тем что ввел пользователь. Используем функцию searchItem, которая осуществляет сравнение
  // если хоть какое то значение введенно в инпут , то это true
  const filteredArray = searchInputText
    ? allTracks.filter((ad) => searchItem(ad.name, searchInputText))
    : allTracks
  if (!user.id) {
    user = JSON.parse(localStorage.getItem('user'))
  }

  // тут работаем уже с фильтром по исполнителям. Если filteredByAuthor включает в себя название на которое нажали, вывести только эти треки
  const actuallyTracks = filteredArray.filter((el) => {
    if (filteredByAuthor.length == 0) return el
    else {
      return filteredByAuthor.includes(el.author)
    }
  })

  // Производим фильтрацию массива actuallyTracks на основе массива filteredArrayGenre взятого из store.
  const genreArray = actuallyTracks.filter((el) => {
    // Если ничего из жанров не будет нажато вернем весь массив actuallyTracks
    if (filteredArrayGenre.length == 0) {
      return el
      // Еcли юзер нажал на жанр, и он есть в массиве actuallyTracks, вернутся все найденные совпадения. В Итоговый массив запишутся все найденные совпадения.
    } else {
      // Если filteredArrayGenre содержит текущий el.genre, то элемент добавляется в итоговый массив genreArray. Если не содержит, то элемент не добавляется.
      return filteredArrayGenre.includes(el.genre)
    }
  })

  const allFiltersInclude =
    filteredArrayYear == 'по умолчанию'
      ? genreArray
      : genreArray.sort(function (a, b) {
          if (filteredArrayYear == 'сначала новые') [a, b] = [b, a]
          if (a['release_date'] > b['release_date']) {
            return 1
          }
          if (a['release_date'] < b['release_date']) {
            return -1
          }
          return 0
        })

  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        {allFiltersInclude.map((track, index) => (
          <S.PlaylistTrack key={track.id}>
            <S.TrackTitle onClick={() => todoClick(track, index)}>
              <S.TrackTitleImage>
                <SkeletSizeTempl IamWidth="51" IamHeight="51" />

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
              <S.TrackTimeText>
                {FormatTime(track.duration_in_seconds)}
              </S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        ))}
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}
