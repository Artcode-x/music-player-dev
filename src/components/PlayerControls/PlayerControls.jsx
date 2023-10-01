import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './PlayerControls.style'
import sprite from '../../img/icon/sprite.svg'
import {
  addSetPause,
  addActiveTrack,
  addIdTrack,
  addShuffleTrack,
  // addSHufflePlayStop,
  addNextTrack,
  addShuffled,
  // addPause,
  // addPlay,
} from '../../store/actions/creators/creators'
import allTracksSelector from '../../store/selectors/selectors'

export default function PlayersControls({
  audioRef,
  repeat,
  setRepeat,
  // setKeyItem,
}) {
  //  let index
  const [isPlaying, setIsPlaying] = useState(false)

  // состояние текущего трека - играет или нет
  // const activeTrack = useSelector(activeTrackSelector)

  const allTracks = useSelector(allTracksSelector)

  const idTrack = useSelector((store) => store.tracks.idTrack)

  const shufflePlayStop = useSelector((store) => store.tracks.shufflePlayStop)

  const shuffled = useSelector((store) => store.tracks.shuffled)

  const shuffleTracks = useSelector((store) => store.tracks.shuffleTracks)

  const dispatch = useDispatch()

  const toPrevTrack = () => {
    dispatch(addSetPause(true))
    dispatch(addIdTrack({ index: idTrack.index - 1 }))
    dispatch(addActiveTrack(allTracks[idTrack.index - 1]))

    //  setKeyItem(allTracks[idTrack.index - 1])
  }

  const toNextTrack = () => {
    // если нажали первый раз кнопку зашафл треки
    // нужно зап-ть нулевой трек из зашафленного массива

    if (shuffled === 'buttonClickFirst') {
      if (shuffleTracks) {
        dispatch(addActiveTrack(shuffleTracks[0]))
      }
      //  записываем трек который играет нулевым эл-ом уже перемешанного массива

      // первый раз была нажата кнопка шафл
      dispatch(addIdTrack({ index: shuffleTracks[0].id }))
      // dispatch(addSHufflePlayStop(true))
      dispatch(addShuffled(true))
      dispatch(addSetPause(true))
      return
    }
    if (shuffled === false) {
      console.log('2222')
      // обозначаем что трек играет
      dispatch(addSetPause(true))
      // увеличим число на +1 где idTrack
      //  dispatch(addIdTrack({ index: idTrack.index + 1 }))
      // включаем след трек
      //  dispatch(addActiveTrack(allTracks[idTrack.index + 1]))
      dispatch(addNextTrack())
      //     setKeyItem(allTracks[idTrack.index + 1])
    } else {
      console.log('3333')
      dispatch(addSetPause(true))

      dispatch(addNextTrack())
      // dispatch(addIdTrack({ index: idTrack.index + 1 }))

      // dispatch(addActiveTrack(shuffleTracks[idTrack.index + 1]))
    }
  }

  const shuffle = () => {
    // если тру - нажали 2 раз
    if (shufflePlayStop === true || shufflePlayStop === 'buttonClickFirst') {
      // выключаем кнопку
      dispatch(addShuffleTrack(false))
    } else {
      // для понимания того что кнопка шафл нажата первый раз
      dispatch(addShuffled('buttonClickFirst'))

      const newShuffleTracks = allTracks.map((track) => track)
      newShuffleTracks.sort(() => Math.random() - 0.5)
      // console.log(allTracks)
      // console.log(shuffleTracks)
      dispatch(addShuffleTrack(newShuffleTracks))
    }
  }

  const audiocontrol = (text) => {
    switch (text) {
      case 'prev':
        toPrevTrack()
        break
      case 'play':
        audioRef.current.play()
        dispatch(addSetPause(true))
        //  dispatch(addPlay())
        setIsPlaying(false) // на основе стейта меняем иконку плей паузыы
        break
      case 'stop':
        audioRef.current.pause()
        dispatch(addSetPause(false)) // отправляем в стейт false чтобы остановилась анимация
        //    dispatch(addPause())
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
