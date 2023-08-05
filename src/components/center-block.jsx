import '../css/style.css'
import { useState } from 'react'
import sprite from '../img/icon/sprite.svg'
import RybkaForImport from './skeleton-fish-import'

const centerblockSearch = (
  <div className="centerblock__search search">
    <svg className="search__svg">
      <use xlinkHref={`${sprite}#icon-search`} />
    </svg>
    <input
      className="search__text"
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </div>
)

const contentTitlePlayList = (
  <div className="content__title playlist-title">
    <div className="playlist-title__col col01">Трек</div>
    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
    <div className="playlist-title__col col03">АЛЬБОМ</div>
    <div className="playlist-title__col col04">
      <svg className="playlist-title__svg" alt="time">
        <use xlinkHref={`${sprite}#icon-watch`} />
      </svg>
    </div>
  </div>
)

const list = (
  <div className="filterList">
    <ul className="filterListul">
      <li className="filterListtext">Michael Jackson</li>
      <li className="filterListtext">Frank Sinatra</li>
      <li className="filterListtext">Calvin Harris</li>
      <li className="filterListtext">Zhu</li>
      <li className="filterListtext">Arctic Monkeys</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
      <li className="filterListtext">Test</li>
    </ul>
  </div>
)

const yearUl = <div className="filterList filterListyear" />

const genre = (
  <div className="filterList">
    <ul className="filterListul">
      <li className="filterListtext">Рок</li>
      <li className="filterListtext">Хип-хоп</li>
      <li className="filterListtext">Поп-музыка</li>
      <li className="filterListtext">Техно</li>
      <li className="filterList__text">Инди</li>
    </ul>
  </div>
)

function RenderCenter({ loading1 }) {
  const [visible, changeOfState] = useState('CloseList')
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
    <div className="main__centerblock centerblock">
      {centerblockSearch}
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={onEnterArtist}
          onClick={() => changeState('OpenListArtist')}
          className={`filter__button button-author _btn-text ${
            visible === 'OpenListArtist' ? 'active' : null
          }`}
        >
          исполнителю
        </div>

        <div
          role="button"
          tabIndex={0}
          onKeyDown={onEnterYear}
          onClick={() => changeState('OpenYear')}
          className={`filter__button button-year _btn-text ${
            visible === 'OpenYear' ? 'active' : null
          }`}
        >
          году выпуска
        </div>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={onEnterGenre}
          onClick={() => changeState('OpenGenre')}
          className={`filter__button button-genre _btn-text ${
            visible === 'OpenGenre' ? 'active' : null
          }`}
        >
          жанру
        </div>
      </div>
      {visible === 'OpenListArtist' ? list : null}
      {visible === 'OpenYear' ? yearUl : null}
      {visible === 'OpenGenre' ? genre : null}
      {loading1 ? (
        <div className="centerblock__content">
          {contentTitlePlayList}
          <div className="content__playlist playlist">
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <RybkaForImport IamWidth="51px" IamHeight="51px" />
                  </div>
                  <div className="track__title-text">
                    <RybkaForImport IamWidth="356px" IamHeight="19px" />
                  </div>
                </div>
                <div className="track__author">
                  <RybkaForImport IamWidth="271px" IamHeight="19px" />
                </div>
                <div className="track__album">
                  <RybkaForImport IamWidth="305px" IamHeight="19px" />
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={`${sprite}#icon-like`} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="centerblock__content">
          {contentTitlePlayList}
          <div className="content__playlist playlist">
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <RybkaForImport IamWidth="51" IamHeight="51" />
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Guilt <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Nero
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Welcome Reality
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={`${sprite}#icon-like`} />
                  </svg>
                  <span className="track__time-text">4:44</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RenderCenter
