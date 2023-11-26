import { activeTrackSelector } from '../../store/selectors/selectors'
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
    // Чтобы изменить состояние, нам потребуется dispatch. dispatch - Это ф-ия, и при вызове ее, параметром она принимает ACTION. Action - это объект, у которого обязательно должен быть тип. (тип мы указывали в редюсере)
    // Второе св-во объекта - это какие то данные, в данном случае это зн-ие true/false
    dispatch(addSetPause(true)) // при нажатиии на первй трек - записали в action зн-ие  true

    dispatch(addActiveTrack(track)) // хранится тек-ий играющий трек
    // setKeyItem(track)
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

      // проверяем ставили лайк на трек или нет
      // обращаемся к треку, который получили.
      // обращаемся в stared_user - где хр-ся все users, которые лайкали текущий трек
      // Методом find прох-ся по всему массиву stared_user
      // el - произвольное назв-ие эл-та.
      // Далее сравниваем el.id, т.е. заходим в каждый массив внутри stared_user и ищем там .id
      // , и если id = нашему user.id то мы лайкнули этот трек
      // либо если мы не нашли тек-ий id, то мы не лайкнули этот трек

      if (track.stared_user.find((el) => el.id === user.id)) {
        await disLike({ token: tokenAccess, id: track.id })
      } else {
        await addLike({ token: tokenAccess, id: track.id })
      }

      // Передаем в token - tokenAccess - когда логинимся, у нас генер-ся токен, который протухает через некоторое время, это и есть tokenAccess

      // После нажатия на svgLike сработает disLike либо addLike
      // После этого необходимо обновить все треки, чтобы поставленные/убранные лайки обновились

      if (vseTrekiAndLikesTracks === 'All') {
        const response = await getAllTracksFromApi()
        dispatch(addTracks(response))
      } else {
        const response = await getFavoriteTracks()
        dispatch(addFavoriteTracks(response))
      }

      //В итоге при каждом нажатии на лайк/диз будет диспатч addTracks
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

  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        {allTracks.map((track, index) => (
          <S.PlaylistTrack key={track.id}>
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
