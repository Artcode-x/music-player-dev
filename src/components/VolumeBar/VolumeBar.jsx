/* eslint-disable no-param-reassign */
import { useState } from 'react'
import * as S from './VolumeBar.styles'
import sprite from '../../img/icon/sprite.svg'

export default function VolumeBar({ audioRef }) {
  const [value, setValue] = useState('1') // value - пок-т какой ур-нь громкости

  const changeValue = (event) => {
    // принимаем event
    setValue(event.target.value) // передаем значение event в setValue -> value
    // event содержит в себе текущую инф-ю на каком этапе находится value от 0 до 1

    // audioRef принимаем в арг-те ф-ии volumeBar чтобы далее получить доступ к <audio>

    // У нас есть аудио с которым мы должны взаимодействовать, и у него изменить значение громкости, именно на то value, которое у нас на 34 строке: value={value} (которое мы изменяем)

    // принимаем ref от аудио - audioRef. Получаем так доступ к аудио.
    // обращаемся к св-ву обьекта - громкости
    audioRef.current.volume = parseFloat(value)
    // в перем-ую volume передали значение value нашего бара. Теперь будет меняться громкость в зависимости от положения
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
            onInput={(event) => changeValue(event)} // передаем event в ф-ию
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}
