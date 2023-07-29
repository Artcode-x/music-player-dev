import { useState } from 'react'

import sprite from '../../img/icon/sprite.svg'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import * as S from './center-block.styles'

function RenderCenter({ loading1, allTracks, keyItem, setKeyItem }) {
  const todoClick = (track) => {
    setKeyItem(track)
    console.log({ keyItem })
  }

  const contentTitlePlayList = (
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

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref={`${sprite}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>

      <S.CenterblockH2>Треки</S.CenterblockH2>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButtonArtist
          propsKeyVisible={visible}
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
          propsKeyVisible={visible}
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
          propsKeyVisible={visible}
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
        <S.centerblockContent>
          {contentTitlePlayList}
          <S.ContentPlaylist>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <RybkaForImport IamWidth="51px" IamHeight="51px" />
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <RybkaForImport IamWidth="356px" IamHeight="19px" />
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <RybkaForImport IamWidth="271px" IamHeight="19px" />
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <RybkaForImport IamWidth="305px" IamHeight="19px" />
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref={`${sprite}#icon-like`} />
                  </S.TrackTimeSvg>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
          </S.ContentPlaylist>
        </S.centerblockContent>
      ) : (
        <S.centerblockContent>
          {contentTitlePlayList}
          <S.ContentPlaylist>
            <S.PlaylistItem>
              {allTracks.map((track) => (
                <S.PlaylistTrack
                  onClick={() => todoClick(track)}
                  key={track.id}
                >
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <RybkaForImport IamWidth="51" IamHeight="51" />
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref={`${sprite}#icon-note`} />
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitleText>
                      <S.TrackTitleLink>
                        {track.name}
                        <span className="track__title-span" />
                      </S.TrackTitleLink>
                    </S.TrackTitleText>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackTitleLink>{track.author}</S.TrackTitleLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackTitleLink>{track.album}</S.TrackTitleLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref={`${sprite}#icon-like`} />
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>
                      {track.duration_in_seconds}
                    </S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              ))}
            </S.PlaylistItem>
          </S.ContentPlaylist>
        </S.centerblockContent>
      )}
    </S.MainCenterblock>
  )
}

export default RenderCenter
