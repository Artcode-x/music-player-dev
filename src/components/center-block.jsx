import '../css/style.css'
import { useState } from 'react'
import sprite from '../img/icon/sprite.svg'

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

const GlobalContentPlaylist = (
  <div className="content__playlist playlist">
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
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

    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={`${sprite}#icon-note`} />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Elektro <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Dynoro, Outwork, Mr. Gee
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Elektro
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">2:22</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              I’m Fire <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Ali Bakgor
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            I’m Fire
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">2:22</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Non Stop
              <span className="track__title-span">(Remix)</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Стоункат, Psychopath
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Non Stop
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">4:12</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Run Run
              <span className="track__title-span">(feat. AR/CO)</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Jaded, Will Clarke, AR/CO
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Run Run
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">2:54</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Eyes on Fire
              <span className="track__title-span">(Zeds Dead Remix)</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Blue Foundation, Zeds Dead
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Eyes on Fire
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">5:20</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Mucho Bien
              <span className="track__title-span">(Hi Profile Remix)</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            HYBIT, Mr. Black, Offer Nissim, Hi Profile
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Mucho Bien
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">3:41</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Knives n Cherries
              <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            minthaze
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Captivating
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">1:48</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              How Deep Is Your Love
              <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Calvin Harris, Disciples
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            How Deep Is Your Love
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">3:32</span>
        </div>
      </div>
    </div>
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Morena <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Tom Boxer
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Soundz Made in Romania
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">3:36</span>
        </div>
      </div>
    </div>
    {/* <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../src/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="index.html">
            test
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="index.html">
            test
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../src/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text" />
        </div>
      </div>
    </div> */}
  </div>
)

const globalCenterBlockContent = (
  <div className="centerblock__content">
    {contentTitlePlayList}
    {GlobalContentPlaylist}
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

function RenderCenter() {
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

  // const [openFilter, setOpenFilter] = useState(null)

  // const setStatusFilter = (event) => setOpenFilter()

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

      {globalCenterBlockContent}
    </div>
  )
}

export default RenderCenter
