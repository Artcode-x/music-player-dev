import { useSelector } from 'react-redux'
import RenderBar from '../../components/Bar-Below/BarBelow'
import * as S from './fromApp-ToMain.styles'
import { useState } from 'react'
export const RenderBarPlayer = ({ loading, isPlaying, setIsPlaying }) => {
  const activeTrack = useSelector((store) => store.tracks.activeTrack)
  const [repeat, setRepeat] = useState(false)
  return (
    <>
      {activeTrack && (
        <S.Bar>
          <RenderBar
            active={activeTrack}
            repeat={repeat}
            setRepeat={setRepeat}
            // keyItem={keyItem}
            // setKeyItem={setKeyItem}
            loading={loading}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </S.Bar>
      )}
    </>
  )
}
