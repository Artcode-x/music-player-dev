import '../css/style.css'
import iconRandom from '../img/playlist01.png'
import iconRandom1 from '../img/playlist02.png'
import iconRandom2 from '../img/playlist03.png'

const sidebarPersonal = (
  <div className="sidebar__personal">
    <p className="sidebar__personal-name">Sergey.Ivanov</p>
    <div className="sidebar__avatar" />
  </div>
)

const sidebarItem1 = (
  <div className="sidebar__item">
    <a className="sidebar__link" href="index.html">
      <img className="sidebar__img" src={iconRandom} alt="day's playlist" />
    </a>
  </div>
)

const sidebarItem2 = (
  <div className="sidebar__item">
    <a className="sidebar__link" href="index.html">
      <img className="sidebar__img" src={iconRandom1} alt="day's playlist" />
    </a>
  </div>
)

const sidebarItem3 = (
  <div className="sidebar__item">
    <a className="sidebar__link" href="index.html">
      <img className="sidebar__img" src={iconRandom2} alt="day's playlist" />
    </a>
  </div>
)

const sidebarList = (
  <div className="sidebar__list">
    {sidebarItem1}
    {sidebarItem2}
    {sidebarItem3}
  </div>
)

const sidebarBlock = <div className="sidebar__block">{sidebarList}</div>

function RenderRbar() {
  return (
    <div className="main__sidebar sidebar">
      {sidebarPersonal}
      {sidebarBlock}
    </div>
  )
}

export default RenderRbar
