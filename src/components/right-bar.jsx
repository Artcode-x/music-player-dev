import '../css/style.css'
import iconRandom from '../img/playlist01.png'
import iconRandom1 from '../img/playlist02.png'
import iconRandom2 from '../img/playlist03.png'
import RybkaForImport from './skeleton-fish-import'

const sidebarPersonal = (
  <div className="sidebar__personal">
    <p className="sidebar__personal-name">Sergey.Ivanov</p>
    <div className="sidebar__avatar" />
  </div>
)

function RenderRbar({ loading }) {
  return (
    <div className="main__sidebar sidebar">
      {sidebarPersonal}
      {loading ? (
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <RybkaForImport IamWidth="250px" IamHeight="150px" />
            </div>
            <div className="sidebar__item">
              <RybkaForImport IamWidth="250px" IamHeight="150px" />
            </div>
            <div className="sidebar__item">
              <RybkaForImport IamWidth="250px" IamHeight="150px" />
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="index.html">
                <img
                  className="sidebar__img"
                  src={iconRandom}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="index.html">
                <img
                  className="sidebar__img"
                  src={iconRandom1}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="index.html">
                <img
                  className="sidebar__img"
                  src={iconRandom2}
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RenderRbar
