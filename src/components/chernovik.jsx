// function RenderCenter() {
//   const [visible, close] = useState(true)
//   const changeState = () => close(!visible)

//   const onEnter = (event) => {
//     if (event.key === 'Enter') {
//       changeState()
//     }
//   }

//   return (
//     <div className="main__centerblock centerblock">
//       {centerblockSearch}

//       <h2 className="centerblock__h2">Треки</h2>
//       <div className="centerblock__filter filter">
//         <div className="filter__title">Искать по:</div>
//         <div
//           role="button"
//           tabIndex={0}
//           onKeyDown={onEnter}
//           onClick={changeState}
//           className="filter__button button-author _btn-text"
//         >
//           исполнителю
//         </div>
//         {visible && list}
//         <div className="filter__button button-year _btn-text">году выпуска</div>
//         <div className="filter__button button-genre _btn-text">жанру</div>
//       </div>
//       {list}
//       {yearUl}
//       {genre}
//       {globalCenterBlockContent}
//     </div>
//   )
// }

// export default RenderCenter
