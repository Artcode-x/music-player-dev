import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Ma1nNav from '../../components/Left-Nav/left-nav'
import RenderCenter from '../../components/Center-Block/center-block'
import RenderRbar from '../../components/Right-Bar/right-bar'
import RenderBar from '../../components/Bar-Below/BarBelow'
import * as S from './fromApp-ToMain.styles'
import getAllTracksFromApi from '../../components/Api/api'
import addTracks from '../../store/actions/creators/creators'

function Main() {
  const [loading, setTimeLoading] = useState(true)
  const [allTracks, setAllTracks] = useState(null)
  const [addError, setAddError] = useState(null)
  // стейт для выбранного трека
  const [keyItem, setKeyItem] = useState('')

  const [repeat, setRepeat] = useState(false)

  const dispatch = useDispatch()

  const fromApi = async () => {
    try {
      const spisokTrackov = await getAllTracksFromApi()
      dispatch(addTracks(spisokTrackov)) // передаю в action, то что нужно сохранить
      setAllTracks(spisokTrackov)
    } catch (error) {
      // console.log(error.message)
      setAddError(error.message)
    }
  }

  useEffect(() => {
    fromApi()
  }, [])

  useEffect(() => {
    setTimeout(() => setTimeLoading(false), 2000)
  }, [])

  return (
    <S.Container>
      <S.Main>
        <Ma1nNav />
        <RenderCenter
          addError={addError}
          setKeyItem={setKeyItem}
          allTracks={allTracks}
          loading1={loading}
        />
        <RenderRbar loading={loading} />
      </S.Main>
      <S.Bar>
        <RenderBar
          repeat={repeat}
          setRepeat={setRepeat}
          keyItem={keyItem}
          setKeyItem={setKeyItem}
          loading={loading}
        />
      </S.Bar>
    </S.Container>
  )
}
export default Main
