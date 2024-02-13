import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RenderCenter from '../../components/RenderCenter/RenderCenter'
import * as S from './Main.styled'
import getAllTracksFromApi from '../../components/Api/api'
import addTracks from '../../store/actions/creators/creators'

function Main({ loading, setTimeLoading, isPlaying, setIsPlaying }) {
  const [allTracks, setAllTracks] = useState(null)
  const [addError, setAddError] = useState(null)

  const dispatch = useDispatch()

  const fromApi = async () => {
    try {
      const spisokTrackov = await getAllTracksFromApi()
      dispatch(addTracks(spisokTrackov))
      setAllTracks(spisokTrackov)
    } catch (error) {
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
        <RenderCenter
          addError={addError}
          allTracks={allTracks}
          loading1={loading}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </S.Main>
    </S.Container>
  )
}
export default Main
