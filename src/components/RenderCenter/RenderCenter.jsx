import { useState } from 'react'
import * as S from './RenderCenter.styled'
import Error from '../Error/Error'
import Skeletons from '../Skeletons/Skeletons'
import Zagolovok from '../Zagolovok/Zagolovok'
import TitlePlayList from '../TitlePlayList/TitlePlayList'
import { MusicList } from '../MusicList/MusicList'
import { useSelector } from 'react-redux'
import {
  filteredArrayGenreSelector,
  filteredArrayTracksSelector,
  filteredArrayYearSelector,
} from '../../store/selectors/selectors'
import FilterYearButton from '../FilterYearButton/FilterYearButton'
import FilterAuthorButton from '../FilterAuthorButton/FilterAuthorButton'
import FilterGenreButton from '../FilterGenreButton/FilterGenreButton'

function RenderCenter({ loading1, addError, isPlaying, setIsPlaying }) {
  const [visible, changeOfState] = useState('CloseList')

  const filteredArrayYear = useSelector(filteredArrayYearSelector)
  const filteredByAuthor = useSelector(filteredArrayTracksSelector)
  const filteredArrayGenre = useSelector(filteredArrayGenreSelector)
  const yearUl = FilterYearButton()
  let list = FilterAuthorButton()
  let genre = FilterGenreButton()

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
      <Zagolovok />
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
          {filteredArrayYear.length !== 0 && (
            <S.MetkaYear>
              <S.Color>
                {filteredArrayYear == 'сначала новые'
                  ? String.fromCodePoint(8593)
                  : filteredArrayYear == 'сначала старые'
                  ? String.fromCodePoint(8595)
                  : '>'}
              </S.Color>
            </S.MetkaYear>
          )}
        </S.FilterButtonYear>
        <S.FilterButtonGenre
          $propsKeyVisible={visible}
          role="button"
          tabIndex={0}
          onKeyDown={onEnterGenre}
          onClick={() => changeState('OpenGenre')}
        >
          жанру
          {filteredArrayGenre.length !== 0 && (
            <S.MetkaGenre>
              <S.Color>{filteredArrayGenre.length}</S.Color>
            </S.MetkaGenre>
          )}
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
