import { useState, useEffect } from 'react'
import Ma1nNav from '../../components/Left-Nav/left-nav'
import RenderCenter from '../../components/Center-Block/center-block'
import RenderRbar from '../../components/Right-Bar/right-bar'
import RenderBar from '../../components/Bar-Below/BarBelow'
import * as S from './fromApp-ToMain.styles'

function Main() {
  const [loading, setTimeLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setTimeLoading(false), 2000)
  }, [loading])

  return (
    <S.Container>
      <S.Main>
        <Ma1nNav />
        <RenderCenter loading1={loading} />
        <RenderRbar loading={loading} />
      </S.Main>
      <S.Bar>
        <RenderBar loading={loading} />
      </S.Bar>
    </S.Container>
  )
}
export default Main
