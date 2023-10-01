import {
  ADD_TRACK,
  PLAY_TRACK,
  ACTIVE_TRACK,
  PLAY_PAUSE,
  ID_TRACK,
  SHUFFLE_TRACKS,
  SHUFFLE_PLAY_STOP,
  NEXT_TRACK,
  PLAY,
  PAUSE,
  SHUFFLE,

  //   SHUFFLE_TRACKS,
  //   ADD_USER,
  //   FAVORITES_TRACKS,
  //   ADD_TOKEN,
  //   NEXT_TRACK,
  //   SET_CURRENT_TRACK,
  PREV_TRACK,
} from '../types/types'

// Actions - получают какие то данные, затем куда то сохраняют их
// dispatch берет/перенаправляет этот Action и отправляет его в reducer
// reducer - Меняет данные на основе того что находится в Action-е. Сохраняет изменения в store и отдает в State .
// затем реакт делает перерендер компонент в которых изменились данные

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

export const addIdTrack = (idTrack) => ({
  type: ID_TRACK,
  payload: { idTrack },
})

export const addShuffleTrack = (shuffleTracks) => ({
  type: SHUFFLE_TRACKS,
  payload: { shuffleTracks },
})

export const addSHufflePlayStop = (shufflePlayStop) => ({
  type: SHUFFLE_PLAY_STOP,
  payload: { shufflePlayStop },
})

export const addNextTrack = (nextTrack) => ({
  type: NEXT_TRACK,
  payload: { nextTrack },
})

export const addPrevTrack = (prevTrack) => ({
  type: PREV_TRACK,
  payload: { prevTrack },
})

export const addPlay = (play) => ({
  type: PLAY,
  payload: { play },
})

export const addPause = (pause) => ({
  type: PAUSE,
  payload: { pause },
})

export const addShuffled = (shuffled) => ({
  type: SHUFFLE,
  payload: { shuffled },
})

export default addTracks
