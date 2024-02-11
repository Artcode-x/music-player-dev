import { useState } from 'react'
import * as S from './center-block.styles'
import Error from './Error'
import Skeletons from './Skeletons'
import Zagolovok from './Zagolovok'
import ContentTitlePlayList from './Title-playlist'
import { MusicList } from './MusicList'

function RenderCenter({ loading1, addError, isPlaying, setIsPlaying }) {

  const [visible, changeOfState] = useState('CloseList')

  const list = (
    <S.Filterlist>
      <S.FilterListUl>
        <S.filterListtext>Michael Jackson</S.filterListtext>
        <S.filterListtext>Frank Sinatra</S.filterListtext>
        <S.filterListtext>Calvin Harris</S.filterListtext>
        <S.filterListtext>Zhu</S.filterListtext>
        <S.filterListtext>Arctic Monkeys</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
        <S.filterListtext>Test</S.filterListtext>
      </S.FilterListUl>
    </S.Filterlist>
  )

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
          <ContentTitlePlayList />
          <MusicList isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </S.centerblockContent>
      )}
    </S.MainCenterblock>
  )
}

export default RenderCenter
