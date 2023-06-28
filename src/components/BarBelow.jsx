import '../css/style.css'
import sprite from '../img/icon/sprite.svg'

const PlayerControls = (
  <div className="player__controls">
    <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
        <use xlinkHref={`${sprite}#icon-prev`} />
      </svg>
    </div>
    <div className="player__btn-play _btn">
      <svg className="player__btn-play-svg" alt="play">
        <use xlinkHref={`${sprite}#icon-play`} />
      </svg>
    </div>
    <div className="player__btn-next">
      <svg className="player__btn-next-svg" alt="next">
        <use xlinkHref={`${sprite}#icon-next`} />
      </svg>
    </div>
    <div className="player__btn-repeat _btn-icon">
      <svg className="player__btn-repeat-svg" alt="repeat">
        <use xlinkHref={`${sprite}#icon-repeat`} />
      </svg>
    </div>
    <div className="player__btn-shuffle _btn-icon">
      <svg className="player__btn-shuffle-svg" alt="shuffle">
        <use xlinkHref={`${sprite}#icon-shuffle`} />
      </svg>
    </div>
  </div>
)

const playerTrackPlay = (
  <div className="player__track-play track-play">
    <div className="track-play__contain">
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref={`${sprite}#icon-note`} />
        </svg>
      </div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          Ты та...
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      </div>
    </div>

    <div className="track-play__like-dis">
      <div className="track-play__like _btn-icon">
        <svg className="track-play__like-svg" alt="like">
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>
      </div>
      <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg" alt="dislike">
          <use xlinkHref={`${sprite}#icon-dislike`} />
        </svg>
      </div>
    </div>
  </div>
)

const barVolume = (
  <div className="bar__volume-block volume">
    <div className="volume__content">
      <div className="volume__image">
        <svg className="volume__svg" alt="volume">
          <use xlinkHref={`${sprite}#icon-volume`} />
        </svg>
      </div>
      <div className="volume__progress _btn">
        <input
          className="volume__progress-line _btn"
          type="range"
          name="range"
        />
      </div>
    </div>
  </div>
)

const barContent = (
  <div className="bar__content">
    <div className="bar__player-progress" />
    <div className="bar__player-block">
      <div className="bar__player player">
        {PlayerControls}
        {playerTrackPlay}
        {barVolume}
      </div>
    </div>
  </div>
)

function RenderBar() {
  return <div className="bar">{barContent}</div>
}

export default RenderBar
