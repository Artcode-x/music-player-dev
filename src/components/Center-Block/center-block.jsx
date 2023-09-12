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

function RenderCenter({ loading1, setKeyItem, addError }) {
  //  const [isPlaying, setIsPlaying] = useState(null)

  // чтобы получить состояние, исп-ем хук useSelector
  // Параметром он принимает ф-ию, а эта ф-ия в свою очередь параметром принимает состояние, и из этого состояния мы уже получаем нужную переменную (в данном примере allTracks)
  const allTracks = useSelector((store) => store.tracks.allTracks)

  const playPause = useSelector((store) => store.tracks.playPause)

  const activeTrack = useSelector((store) => store.tracks.activeTrack) // исп-ем знания из state/store

  const idTrack = useSelector((store) => store.tracks.idTrack)

  const dispatch = useDispatch()

  const todoClick = (track, i) => {
    //  setIsPlaying(track.id)
    dispatch(addIdTrack({ ...idTrack, index: i }))
    // Чтобы изменить состояние, нам потребуется dispatch. dispatch - Это ф-ия, и при вызове ее, параметром она принимает ACTION. Action - это объект, у которого обязательно должен быть тип. (тип мы указывали в редюсере)
    // Второе св-во объекта - это какие то данные, в данном случае это зн-ие true/false
    dispatch(addSetPause(true)) // при нажатиии на первй трек - записали в action зн-ие  true

    dispatch(addActiveTrack(track)) // хранится тек-ий играющий трек
    setKeyItem(track)
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
  return !addError ? (
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
            {/* <p>{addError}</p> */}
            <S.PlaylistItem>
              {allTracks.map((track, index) => (
                <S.PlaylistTrack
                  onClick={() => todoClick(track, index)}
                  key={track.id}
                >
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <RybkaForImport IamWidth="51" IamHeight="51" />

                      {track.id === activeTrack.id ? (
                        <S.PlayingDot playPause={playPause} />
                      ) : (
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref={`${sprite}#icon-note`} />
                        </S.TrackTitleSvg>
                      )}
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
  ) : (
    <S.MainCenterblock>
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
            {/* <p>{addError}</p> */}
            <S.PlaylistItem>
              <S.ErrorItem>
                <p>{addError}</p>
              </S.ErrorItem>
            </S.PlaylistItem>
          </S.ContentPlaylist>
        </S.centerblockContent>
      )}
    </S.MainCenterblock>
  )
}

export default RenderCenter
