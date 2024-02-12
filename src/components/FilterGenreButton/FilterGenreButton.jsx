import { useDispatch, useSelector } from 'react-redux'
import * as S from './FilterGenreButton.styled'
import allTracksSelector, {
  filteredArrayGenreSelector,
} from '../../store/selectors/selectors'
import { setArrayFilteredGenre } from '../../store/actions/creators/creators'

function FilterGenreButton() {
  const allTracks = useSelector(allTracksSelector)
  const filteredArrayGenre = useSelector(filteredArrayGenreSelector)
  const dispatch = useDispatch()
  // Создаем массив с жанрами
  const newArrGenre = allTracks.map((el) => {
    return el.genre
  })

  // исключаем повторение эл-ов в масиве
  const uniqGenre = [...new Set(newArrGenre.sort())]

  // Для отображения всех жанров при нажатии на кнопку, применяем map к ранее созданному массиву
  const genre = (
    <S.GenreFilter>
      <S.FilterListUl>
        {uniqGenre.map((genre) => (
          <S.filterListtext onClick={(e) => handleGenreClick(e)} key={genre.id}>
            {genre}
          </S.filterListtext>
        ))}
      </S.FilterListUl>
    </S.GenreFilter>
  )

  // Когда кликаем на выбранный жанр
  const handleGenreClick = (e) => {
    const genreClick = e.target.textContent
    // если в store содержится текст жанра
    if (filteredArrayGenre.includes(genreClick)) {
      // Выражение filteredArrayGenre.filter((el) => el != genreClick) выполняет фильтрацию массива filteredArrayGenre, оставляя только те элементы (обозначаемые el), для которых el не равен genreClick. Таким образом при повторном нажатии на жанр - убираем его из store
      dispatch(
        setArrayFilteredGenre(
          filteredArrayGenre.filter((el) => el != genreClick)
        )
      )
    } else {
      // Сохраняем те жанры которые были нажаты до этого, при выборе нового, добавляем его новым эл-ом массива
      dispatch(setArrayFilteredGenre([...filteredArrayGenre, genreClick]))
    }
  }
  return genre
}

export default FilterGenreButton
