import * as S from './center-block.styles'
import sprite from '../../img/icon/sprite.svg'

export default function Search() {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref={`${sprite}#icon-search`} />
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  )
}
