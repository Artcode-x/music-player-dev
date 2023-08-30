/* eslint-disable default-param-last */
import {
  ADD_TRACK,
  PLAY_TRACK,
  ACTIVE_TRACK,
  PLAY_PAUSE,
} from '../actions/types/types'

const initialTracks = {
  allTracks: [],
  PLAY_TRACK: [],
  ACTIVE_TRACK: [],
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
    case PLAY_TRACK: {
      const { playTrack } = action.payload
      return {
        ...state,
        playTrack,
      }
    }

    case ACTIVE_TRACK: {
      const { activeTrack } = action.payload
      return {
        ...state,
        activeTrack, // добавляем в стейт ключ
      }
    }

    case PLAY_PAUSE: {
      const { playPause } = action.payload
      return {
        ...state,
        playPause, // добавляем в стейт ключ
      }
    }

    default:
      return state
  }
}

export default tracksReducer
