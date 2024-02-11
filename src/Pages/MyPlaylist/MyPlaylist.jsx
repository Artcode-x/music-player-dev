import { useDispatch, useSelector } from 'react-redux'
import {
  disLike,
  getFavoriteTracks,
  refreshToken,
} from '../../components/Api/api'
import {
  addActiveTrack,
  addFavoriteTracks,
  addIdTrack,
  addSetPause,
} from '../../store/actions/creators/creators'
import SkeletSizeTempl from '../../components/Skeleton/Skeleton'
import * as S from './MyPlaylist.styled'
import sprite from '../../img/icon/sprite.svg'
import { activeTrackSelector } from '../../store/selectors/selectors'
import Zagolovok from '../../components/Zagolovok/Zagolovok'
import { useEffect, useState } from 'react'

export default function MyPlaylist({ setIsPlaying }) {
  const favor = useSelector((store) => store.tracks.vseIzbranniyeTreki)
  const playPause = useSelector((store) => store.tracks.playPause)
  const activeTrack = useSelector(activeTrackSelector)

  const [disabled, setDisabled] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(favor)
  }, [favor])

  const todoClick = (track) => {
    setIsPlaying(false)
    dispatch(addIdTrack({ index: track.id }))
    // Чтобы изменить состояние, нам потребуется dispatch. dispatch - Это ф-ия, и при вызове ее, параметром она принимает ACTION. Action - это объект, у которого обязательно должен быть тип. (тип мы указывали в редюсере)
    // Второе св-во объекта - это какие то данные, в данном случае это зн-ие true/false
    dispatch(addSetPause(true)) // при нажатиии на первй трек - записали в action зн-ие  true
    dispatch(addActiveTrack(track))
  }
  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'))
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'))

  const setDislike = async (track) => {
    try {
      setDisabled(true)
      await disLike({ token: tokenAccess, id: track.id })

      const refreshApi = await getFavoriteTracks(tokenAccess)
      // получаем список обновленных фаворитных треков без дизлайкнутых
      dispatch(addFavoriteTracks(refreshApi))
    } catch (error) {
      // сюда заходим если токен сгорает по таймауту
      if (error.message === 'Токен протух') {
        // ген новый токен доступа
        const newAccess = await refreshToken(tokenRefresh)
        // сохр-ем в локалсторадж/ перезаписываем тот что был
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess))
        // чтобы выполнить диз, необходимо обратиться еще раз к апи
        await disLike({ token: newAccess.access, id: track.id })
        // с новым токеном обр к апи
        const response = await getFavoriteTracks(newAccess.access)
        // чтобы лайнутый трек исчез со страницы делаем диспатч
        dispatch(addFavoriteTracks(response))
      }
    } finally {
      setDisabled(false)
    }
  }

  return (
    <>
      <S.ContentPlaylist>
        <Zagolovok />
        <S.PlaylistItem>
          {favor.map((track, index) => (
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
                  onClick={() => setDislike(track)}
                  key={track.id}
                >
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref={`${sprite}#icon-likeActive`} />
                  </S.TrackTimeSvg>
                </S.TrackLike>
                <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
              </S.TrackTime>
            </S.PlaylistTrack>
          ))}
        </S.PlaylistItem>
      </S.ContentPlaylist>
    </>
  )
}
