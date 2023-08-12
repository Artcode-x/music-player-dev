/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react'
import * as S from './progressBar.styled'

export default function ProgressBar({ audioRef }) {
  const [сurrentTime, setCurrentTime] = useState('1')

  const [time, setTime] = useState('0') // записываем время

  const formatTime = (valueInDuration) => {
    const min = Math.floor(valueInDuration / 60)
    const sec = `0${valueInDuration % 60}`.slice(-2)
    return `${min}:${sec}`
  }

  const changeProgress = (event) => {
    audioRef.current.currentTime = event.target.value // меняем время трека в зав-ти от того где нах-ся ползунок/
  }
  useEffect(() => {
    // срабатывает при отрисовке компонента ProgressBar
    // Если audioRef?.current.duration - существует, то duration - максимальное время(или продолжительность трека) записывается в setTime -> time
    if (audioRef?.current.duration) {
      // Если audioRef изменяется (переключается трек), меняем setTime -> Time
      setTime(audioRef.current.duration)
    }
    // затем передаем значение продолжительности трека в input: max={time} (нах-ся в return)
  })

  useEffect(() => {
    // у блока audio есть свои события (event), в докум-ии
    // Событие timeupdate происходит при изменении игрового положения аудио/видео.
    // Это событие вызывается:
    // При перемещении позиции воспроизведения (например, когда пользователь пересылается в другую точку аудио/видео)
    audioRef.current.addEventListener('timeupdate', () => {
      // подписываемся на изменения timeupdate (изменение времени в блоке <audio>)
      // Как только будет изменятся текущее время трека - будет срабатывать эта логика:
      setCurrentTime(audioRef.current.currentTime)
      // записываем текущее время в блоке аудио в переменную currentTime (которая отвечает за текущую позицию в прогресс баре)
      // таким образом ползунок в прогресс баре двигается, перезаписывается переменная currentTime, значение которой стан-ся больше и больше, из за этого наглядно видим изменения/движение ползунка
      return () => {
        // нужно отписаться от обработчика event-a (когда блок пропал, т.е. при переключении трека нужно отказаться от текущего обработчика)
        // при след треке обработчик навесится заново
        audioRef.current.removeEventListener('timeupdate', () => {
          setCurrentTime(audioRef.current.currentTime)
        })
      }
    })
  })

  return (
    <>
      <S.StyledProgressInput
        type="range"
        name="range"
        min="0"
        max={time}
        сurrentTime={сurrentTime}
        step="0.01"
        onInput={(event) => changeProgress(event)}
      />
      <S.BarTime>
        {formatTime(Math.floor(сurrentTime))}/{formatTime(Math.floor(time))}
      </S.BarTime>
    </>
  )
}
