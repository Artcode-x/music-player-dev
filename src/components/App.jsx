import '../css/style.css'
import Ma1nNav from './left-nav'
import RenderCenter from './center-block'
import RenderRbar from './right-bar'
import RenderBar from './BarBelow'

function App() {
  return (
    <div className="container">
      <main className="main">
        <Ma1nNav />
        <RenderCenter />
        <RenderRbar />
      </main>
      <div className="bar">
        <RenderBar />
      </div>
    </div>
  )
}
export default App
