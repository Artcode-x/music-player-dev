/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react'
import * as S from './progressBar.styled'

export default function ProgressBar({ audioRef }) {
  const [value, setValue] = useState('1')

  const [time, setTime] = useState('0') // записываем время

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
    <S.StyledProgressInput
      type="range"
      name="range"
      min="0"
      max={time}
      value={value}
      step="0.01"
      onInput={(event) => changeProgress(event)}
    />
  )
}
