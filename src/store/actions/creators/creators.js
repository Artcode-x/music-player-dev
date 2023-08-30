import {
  ADD_TRACK,
  PLAY_TRACK,
  ACTIVE_TRACK,
  PLAY_PAUSE,
  //   SHUFFLE_TRACKS,
  //   ADD_USER,
  //   FAVORITES_TRACKS,
  //   ADD_TOKEN,
  //   NEXT_TRACK,
  //   SET_CURRENT_TRACK,
  //   PREV_TRACK,
} from '../types/types'

// первый Action
const addTracks = (tracks) => ({
  // в перем-ую addTracks принимаем все треки (tracks)
  type: ADD_TRACK, // в ключ type записываем импортируемую переменную
  payload: { tracks }, // записываем то что принимает addTracks - tracks
})

export const addPlayTrack = (playTrack) => ({
  type: PLAY_TRACK,
  payload: { playTrack },
})

export const addActiveTrack = (activeTrack) => ({
  type: ACTIVE_TRACK,
  payload: { activeTrack },
})

export const addSetPause = (playPause) => ({
  type: PLAY_PAUSE,
  payload: { playPause },
})

export default addTracks
