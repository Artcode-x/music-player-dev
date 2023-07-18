import '../css/style.css'
import { useState, useEffect } from 'react'
import Ma1nNav from './Left-Nav/left-nav'
import RenderCenter from './Center-Block/center-block'
import RenderRbar from './Right-Bar/right-bar'
import RenderBar from './Bar-Below/BarBelow'
import * as S from './App-styles'

function App() {
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
export default App
