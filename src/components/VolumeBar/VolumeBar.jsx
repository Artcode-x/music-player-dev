/* eslint-disable no-param-reassign */
import { useState } from 'react'
import * as S from './VolumeBar.styles'
import sprite from '../../img/icon/sprite.svg'

export default function VolumeBar({ audioRef }) {
  const [value, setValue] = useState('1') // value - пок-т какой ур-нь громкости

  const changeValue = (event) => {
    setValue(event.target.value)

    audioRef.current.volume = parseFloat(value)
  }
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume">
            <use xlinkHref={`${sprite}#icon-volume`} />
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLineBtn
            type="range"
            name="range"
            min="0"
            max="1"
            value={value}
            step="0.01"
            onInput={(event) => changeValue(event)}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}
