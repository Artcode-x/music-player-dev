import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './PlayerControls.style'
import sprite from '../../img/icon/sprite.svg'
import {
  addSetPause,
  addActiveTrack,
  addIdTrack,
  addShuffleTrack,
} from '../../store/actions/creators/creators'
import allTracksSelector from '../../store/selectors/selectors'

export default function PlayersControls({ audioRef, repeat, setRepeat }) {
  //  let index
  const [isPlaying, setIsPlaying] = useState(false)

  // состояние текущего трека - играет или нет
  // const activeTrack = useSelector(activeTrackSelector)

  const allTracks = useSelector(allTracksSelector)

  const idTrack = useSelector((store) => store.tracks.idTrack)

  // const shuffleMusic = useSelector((store) => store.tracks.shuffleTracks)

  const dispatch = useDispatch()

  const toPrevTrack = () => {
    dispatch(addSetPause(true))
    dispatch(addIdTrack({ index: idTrack.index - 1 }))
    dispatch(addActiveTrack(allTracks[idTrack.index - 1]))
  }

  const toNextTrack = () => {
    // обозначаем что трек играет
    dispatch(addSetPause(true))
    // увеличим число на +1 где idTrack
    dispatch(addIdTrack({ index: idTrack.index + 1 }))
    // включаем след трек
    dispatch(addActiveTrack(allTracks[idTrack.index + 1]))
  }

  const shuffle = () => {
    const shuffleTracks = allTracks.map((track) => track)
    shuffleTracks.sort(() => Math.random() - 0.5)
    dispatch(addShuffleTrack(shuffleTracks))
  }

  const audiocontrol = (text) => {
    switch (text) {
      case 'prev':
        toPrevTrack()
        break
      case 'play':
        audioRef.current.play()
        dispatch(addSetPause(true))
        setIsPlaying(false)
        break
      case 'stop':
        audioRef.current.pause()
        dispatch(addSetPause(false)) // отправляем в стейт false чтобы остановилась анимация
        setIsPlaying(true)
        break
      case 'next':
        toNextTrack()
        break
      case 'repeat':
        setRepeat(!repeat)
        console.log(repeat)
        break
      case 'shuffle':
        shuffle()

        alert('пока не реализовано')
        break
      default:
        break
    }
  }
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev onClick={() => audiocontrol('prev')}>
        <S.PlayerBtnPrevSvg alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`} />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay
        onClick={() => audiocontrol(isPlaying ? 'play' : 'stop')}
      >
        <S.PlayerBtnPlaySvg alt="play">
          <use
            xlinkHref={
              isPlaying ? `${sprite}#icon-play` : `${sprite}#icon-pause`
            }
          />
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext onClick={() => audiocontrol('next')}>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref={`${sprite}#icon-next`} />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat onClick={() => audiocontrol('repeat')}>
        <S.PlayerBtnRepeatSvg alt="repeat">
          <use
            xlinkHref={
              repeat === false
                ? `${sprite}#icon-repeat`
                : `${sprite}#icon-repeatActive`
            }
          />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle onClick={() => audiocontrol('shuffle')}>
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`} />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
