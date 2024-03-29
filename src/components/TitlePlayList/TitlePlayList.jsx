import * as S from './TitlePlayList.styled'
import sprite from '../../img/icon/sprite.svg'

export default function TitlePlayList() {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
      <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
      <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
      <S.PlaylistTitleCol04>
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref={`${sprite}#icon-watch`} />
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol04>
    </S.ContentTitle>
  )
}
