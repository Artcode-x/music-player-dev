/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react'
import * as S from './progressBar.styled'

export default function ProgressBar({ audioRef }) {
  const [value, setValue] = useState('1')

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
    if (audioRef?.current.duration) {
      setTime(audioRef.current.duration)
    }
  })

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', () => {
      setValue(audioRef.current.currentTime)
      return () => {
        audioRef.current.removeEventListener('timeupdate', () => {
          setValue(audioRef.current.currentTime)
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
        value={value}
        step="0.01"
        onInput={(event) => changeProgress(event)}
      />
      <S.BarTime>
        {formatTime(Math.floor(value))}/
        {formatTime(Math.floor(audioRef.current?.duration))}
      </S.BarTime>
    </>
  )
}
