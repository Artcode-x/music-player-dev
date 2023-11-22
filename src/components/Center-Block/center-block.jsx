import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import sprite from '../../img/icon/sprite.svg'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import * as S from './center-block.styles'
import {
  addActiveTrack,
  addIdTrack,
  addSetPause,
} from '../../store/actions/creators/creators'
import Error from './Error'
import Skeletons from './Skeletons'
import Search from './Search'
import Zagolovok from './Zagolovok'
import ContentTitlePlayList from './Title-playlist'
import { MusicList } from './MusicList'

function RenderCenter({ loading1, addError, isPlaying, setIsPlaying }) {
  //  const [isPlaying, setIsPlaying] = useState(null)

  // чтобы получить состояние, исп-ем хук useSelector
  // Параметром он принимает ф-ию, а эта ф-ия в свою очередь параметром принимает состояние, и из этого состояния мы уже получаем нужную переменную (в данном примере allTracks)
  const allTracks = useSelector((store) => store.tracks.allTracks)

  const playPause = useSelector((store) => store.tracks.playPause)

  const activeTrack = useSelector((store) => store.tracks.activeTrack) // исп-ем знания из state/store

  const dispatch = useDispatch()

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

  const [visible, changeOfState] = useState('CloseList')
  // const [allTracks, setAllTracks] = useState(null)

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

  // if (loading1) return <Skeletons />

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
          // логика активной кнопки
          // className={`filter__button button-author _btn-text ${
          //   visible === 'OpenListArtist' ? 'active' : null
          // }`}
        >
          исполнителю
        </S.FilterButtonArtist>

        <S.FilterButtonYear
          $propsKeyVisible={visible}
          role="button"
          tabIndex={0}
          onKeyDown={onEnterYear}
          onClick={() => changeState('OpenYear')}
          // логика активной кнопки
          // className={`filter__button button-year _btn-text ${
          //   visible === 'OpenYear' ? 'active' : null
          // }`}
        >
          году выпуска
        </S.FilterButtonYear>
        <S.FilterButtonGenre
          $propsKeyVisible={visible}
          role="button"
          tabIndex={0}
          onKeyDown={onEnterGenre}
          onClick={() => changeState('OpenGenre')}
          // логика активной кнопки
          // className={`filter__button button-genre _btn-text ${
          //   visible === 'OpenGenre' ? 'active' : null
          // }`}
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
