import { useSelector } from 'react-redux'
import BarBelow from '../Bar-Below/BarBelow'
import * as S from './RenderBarPlayer.styled'
import { useState } from 'react'
export const RenderBarPlayer = ({ loading, isPlaying, setIsPlaying }) => {
  const activeTrack = useSelector((store) => store.tracks.activeTrack)
  const [repeat, setRepeat] = useState(false)
  return (
    <>
      {activeTrack && (
        <S.Bar>
          <BarBelow
            active={activeTrack}
            repeat={repeat}
            setRepeat={setRepeat}
            loading={loading}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </S.Bar>
      )}
    </>
  )
}
