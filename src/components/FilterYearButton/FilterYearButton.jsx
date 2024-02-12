import { useDispatch } from 'react-redux'
import * as S from './FilterYearButton.styled'
import { setArrayFilteredYear } from '../../store/actions/creators/creators'

function FilterYearButton() {
  const dispatch = useDispatch()
  return (
    <S.YearFilter>
      <S.FilterListUl>
        <S.filterListtext
          onClick={() => dispatch(setArrayFilteredYear('по умолчанию'))}
        >
          По умолчанию
        </S.filterListtext>
        <S.filterListtext
          onClick={() => dispatch(setArrayFilteredYear('сначала новые'))}
        >
          Сначала новые
        </S.filterListtext>
        <S.filterListtext
          onClick={() => dispatch(setArrayFilteredYear('сначала старые'))}
        >
          Сначала Старые
        </S.filterListtext>
      </S.FilterListUl>
    </S.YearFilter>
  )
}

export default FilterYearButton
