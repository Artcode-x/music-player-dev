import { useState } from 'react'
import * as S from './RenderCenter.styled'
import Error from '../Error/Error'
import Skeletons from '../Skeletons/Skeletons'
import Zagolovok from '../Zagolovok/Zagolovok'
import TitlePlayList from '../TitlePlayList/TitlePlayList'
import { MusicList } from '../MusicList/MusicList'
import { useDispatch, useSelector } from 'react-redux'
import allTracksSelector, {
  filteredArrayTracksSelector,
} from '../../store/selectors/selectors'
import { setArrayFilteredTracks } from '../../store/actions/creators/creators'

function RenderCenter({ loading1, addError, isPlaying, setIsPlaying }) {
  const [visible, changeOfState] = useState('CloseList')
  const dispatch = useDispatch()

  let filteredByAuthor = []
  filteredByAuthor = useSelector(filteredArrayTracksSelector)
  const allTracks = useSelector(allTracksSelector)

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

  const yearUl = <S.filterListyear />

  const genre = (
    <S.Filterlist>
      <S.FilterListUl>
        <S.filterListtext>Рок</S.filterListtext>
        <S.filterListtext>Хип-хоп</S.filterListtext>
        <S.filterListtext>Поп-музыка</S.filterListtext>
        <S.filterListtext>Техно</S.filterListtext>
        <S.filterListtext>Инди</S.filterListtext>
      </S.FilterListUl>
    </S.Filterlist>
  )

  const changeState = (OpenList) =>
    changeOfState(visible === OpenList ? 'CloseList' : OpenList)
  const onEnterArtist = (event) => {
    if (event.key === 'Enter') {
      changeState('OpenListArtist')
    }
  }

  const onEnterYear = (event) => {
    if (event.key === 'Enter') {
      changeState('OpenYear')
    }
  }

  const onEnterGenre = (event) => {
    if (event.key === 'Enter') {
      changeState('OpenGenre')
    }
  }

  if (addError) return <Error />

  return (
    <S.MainCenterblock>
      {/* <Search /> */}
      <Zagolovok />
      {/* Outlet  */}
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>

        <S.FilterButtonArtist
          $propsKeyVisible={visible}
          role="button"
          tabIndex={0}
          onKeyDown={onEnterArtist}
          onClick={() => changeState('OpenListArtist')}
        >
          исполнителю
          {filteredByAuthor.length !== 0 && (
            <S.Metka>
              <S.Color>{filteredByAuthor.length}</S.Color>
            </S.Metka>
          )}
        </S.FilterButtonArtist>

        <S.FilterButtonYear
          $propsKeyVisible={visible}
          role="button"
          tabIndex={0}
          onKeyDown={onEnterYear}
          onClick={() => changeState('OpenYear')}
        >
          году выпуска
        </S.FilterButtonYear>
        <S.FilterButtonGenre
          $propsKeyVisible={visible}
          role="button"
          tabIndex={0}
          onKeyDown={onEnterGenre}
          onClick={() => changeState('OpenGenre')}
        >
          жанру
        </S.FilterButtonGenre>
      </S.CenterblockFilter>
      {visible === 'OpenListArtist' ? list : null}
      {visible === 'OpenYear' ? yearUl : null}
      {visible === 'OpenGenre' ? genre : null}

      {loading1 ? (
        <Skeletons />
      ) : (
        <S.centerblockContent>
          <TitlePlayList />
          <MusicList isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </S.centerblockContent>
      )}
    </S.MainCenterblock>
  )
}

export default RenderCenter
