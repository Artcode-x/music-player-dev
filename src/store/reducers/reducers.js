/* eslint-disable default-param-last */
import { ADD_TRACK } from '../actions/types/types'

const initialTracks = {
  allTracks: [],
}

function tracksReducer(state = initialTracks, action) {
  switch (action.type) {
    case ADD_TRACK: {
      const { tracks } = action.payload // из payload распаковываем tracks
      return {
        ...state, // сохраняем предыдущий стейт
        allTracks: tracks, // записываем в allTracks - треки (tracks)
      }
    }
    default:
      return state
  }
}

export default tracksReducer
