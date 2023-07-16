import '../../css/style.css'
import { styled } from 'styled-components'
import sprite from '../../img/icon/sprite.svg'
import RybkaForImport from '../skeleton-fish-import'

const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
const StyledBarContent = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledBarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

const StyledBarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledBarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const StyledPlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
const StyledPlayerBtnPrev = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 27px 0 31px;
  &__btn-prev,
`

// const StyledPlayerBtnPlay = styled.div``
// const StyledPlayerBtnNext = styled.div``
// const StyledPlayerBtnRepeat = styled.div``

function RenderBar({ loading }) {
  return (
    <StyledBar>
      <StyledBarContent>
        <StyledBarPlayerProgress />
        <StyledBarPlayerBlock>
          <StyledBarPlayer>
            <StyledPlayerControls>
              <StyledPlayerBtnPrev>
                <svg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref={`${sprite}#icon-prev`} />
                </svg>
              </StyledPlayerBtnPrev>
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
            </StyledPlayerControls>
            <div className="player__track-play track-play">
              {loading ? (
                <div className="track-play__contain">
                  <div className="track-play__image">
                    <RybkaForImport IamWidth="51px" IamHeight="51px" />
                    <svg className="track-play__svg" alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </svg>
                  </div>
                  <div className="track-play__author">
                    <RybkaForImport IamWidth="59px" IamHeight="15px" />
                  </div>
                  <div className="track-play__album">
                    <RybkaForImport IamWidth="59px" IamHeight="15px" />
                  </div>
                </div>
              ) : (
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
              )}

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
          </StyledBarPlayer>
        </StyledBarPlayerBlock>
      </StyledBarContent>
    </StyledBar>
  )
}

export default RenderBar
