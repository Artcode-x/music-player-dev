import '../css/style.css'
import { useState, useEffect } from 'react'
import Ma1nNav from './left-nav'
import RenderCenter from './center-block'
import RenderRbar from './right-bar'
import RenderBar from './BarBelow'

function App() {
  const [loading, setTimeLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setTimeLoading(false), 2000)
  }, [loading])

  return (
    <div className="container">
      <main className="main">
        <Ma1nNav />
        <RenderCenter loading1={loading} />
        <RenderRbar loading={loading} />
      </main>
      <div className="bar">
        <RenderBar loading={loading} />
      </div>
    </div>
  )
}
export default App
