import { useSelector } from 'react-redux'
import * as S from './center-block.styles'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Zagolovok() {
  // const vseTrekiAndLikesTracks = useSelector((store) => store.tracks.AllandFav)
  // const [isVisible, setIsVisible] = useState(false)

  // const push = () => setIsVisible(!isVisible)
  return (
    // <>
    //   {' '}
    //   <S.CenterblockH2 $isVisible={isVisible}>
    //     <NavLink linkname={'Главная'} link="/" />
    //     <NavLink linkname={'Мой плейлист'} link="/Favorites" />
    //   </S.CenterblockH2>
    // </>

    <S.CenterblockH2>Треки</S.CenterblockH2>
    // <>
    //   {' '}
    //   {vseTrekiAndLikesTracks === 'All' ? (
    //     <S.CenterblockH2>Треки</S.CenterblockH2>
    //   ) : (
    //     <S.CenterblockH2>Мои Треки</S.CenterblockH2>
    //   )}
    // </>
  )
}
