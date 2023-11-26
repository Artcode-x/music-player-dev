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
import { MusicList } from '../../components/Center-Block/MusicList'
import RybkaForImport from '../../components/Skeleton/skeleton-fish-import'
import * as S from '../../components/Center-Block/center-block.styles'
import sprite from '../../img/icon/sprite.svg'
import { activeTrackSelector } from '../../store/selectors/selectors'
import Zagolovok from '../../components/Center-Block/Zagolovok'
import { useEffect, useState } from 'react'

export default function MyPlaylist({ setIsPlaying }) {
  // обр к апи
  // полученый отв записать в стор
  // из стора достать и отобразить тут
  // getFavoriteTracks()
  const dispatch = useDispatch()
  const favor = useSelector((store) => store.tracks.vseIzbranniyeTreki)

  console.log(favor)

  //vconst allTracks = useSelector((store) => store.tracks.allTracks)

  const playPause = useSelector((store) => store.tracks.playPause)
  const activeTrack = useSelector(activeTrackSelector) // исп-ем знания из state/store
  const user = useSelector((store) => store.tracks.userID)
  const [disabled, setDisabled] = useState(false)
  const [dis, setDis] = useState(false)
  const todoClick = (track) => {
    setIsPlaying(false)
    dispatch(addIdTrack({ index: track.id }))
    // Чтобы изменить состояние, нам потребуется dispatch. dispatch - Это ф-ия, и при вызове ее, параметром она принимает ACTION. Action - это объект, у которого обязательно должен быть тип. (тип мы указывали в редюсере)
    // Второе св-во объекта - это какие то данные, в данном случае это зн-ие true/false
    dispatch(addSetPause(true)) // при нажатиии на первй трек - записали в action зн-ие  true

    dispatch(addActiveTrack(track)) // хранится тек-ий играющий трек
    // setKeyItem(track)
  }

  const setDislike = async (track) => {
    const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'))
    const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'))

    try {
      setDisabled(true)
      await disLike({ token: tokenAccess, id: track.id })
    } catch (error) {
      console.log(error.message)
      // if (error.message === 'Токен протух') {
      //   const newAccess = await refreshToken(tokenRefresh)
      //   localStorage.setItem('tokenAccess', JSON.stringify(newAccess))
      // }
    } finally {
      setDisabled(false)
      dispatch(addFavoriteTracks(favor))
      setDis(true)

      // getFavoriteTracks()
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
                  onClick={() => setDislike(track)}
                  key={track.id}
                >
                  <S.TrackTimeSvg alt="time">
                    {/* <use xlinkHref={`${sprite}#icon-likeActive`} /> */}

                    {!track.id ? (
                      <use xlinkHref={`${sprite}#icon-like`} />
                    ) : (
                      <use xlinkHref={`${sprite}#icon-likeActive`} />
                    )}

                    {/* {track.stared_user.find((el) => el.id === user.id) ? (
                      <use xlinkHref={`${sprite}#icon-likeActive`} />
                    ) : (
                      <use xlinkHref={`${sprite}#icon-like`} />
                    )} */}
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
