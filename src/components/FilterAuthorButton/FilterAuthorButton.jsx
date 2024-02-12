import { useDispatch, useSelector } from 'react-redux'
import * as S from './FilterAuthorButton.styled'
import allTracksSelector, {
  filteredArrayTracksSelector,
} from '../../store/selectors/selectors'
import { setArrayFilteredTracks } from '../../store/actions/creators/creators'
function FilterAuthorButton() {
  const allTracks = useSelector(allTracksSelector)
  const filteredByAuthor = useSelector(filteredArrayTracksSelector)
  const dispatch = useDispatch()

  // Создаем массив с авторами трека
  const newArr = allTracks.map((key) => {
    return key.author
  })

  // Делаем так чтобы авторы не повторялись
  const UniqArrAuthors = [...new Set(newArr.sort())]

  // Для отображения всех авторов, применяем map к ранее созданному массиву
  const list = (
    <>
      <S.Filterlist>
        <S.FilterListUl>
          {UniqArrAuthors.map((author) => (
            <S.filterListtext
              onClick={(e) => handleClickAuthor(e)}
              key={author.id}
            >
              {author}
            </S.filterListtext>
          ))}
        </S.FilterListUl>
      </S.Filterlist>
    </>
  )

  // Когда кликаем на выбранного автора
  const handleClickAuthor = (e) => {
    const author = e.target.textContent

    console.log(filteredByAuthor)
    if (filteredByAuthor.includes(author)) {
      dispatch(
        setArrayFilteredTracks(filteredByAuthor.filter((el) => el != author))
      )
    } else {
      dispatch(setArrayFilteredTracks([...filteredByAuthor, author]))
    }
  }
  return list
}

export default FilterAuthorButton
