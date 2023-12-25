Search

import * as S from './center-block.styles'
import sprite from '../../img/icon/sprite.svg'
import { useDispatch } from 'react-redux'
import { addUpdateSearch } from '../../store/actions/creators/creators'

export default function Search() {
  const dispatch = useDispatch()

  const setSearchType = (e) => {
    dispatch(addUpdateSearch(e))
  }
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref={`${sprite}#icon-search`} />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => setSearchType(e.target.value)}
      />
    </S.CenterblockSearch>
  )
}
