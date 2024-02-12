import {
  ADD_TRACK,
  PLAY_PAUSE,
  ID_TRACK,
  SHUFFLE_TRACKS,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE,
  ACTIVE_TRACK,
  USER,
  FAVORITES_TRACKS,
  ALLTRACKS_FAVORITETRACKS,
  SEARCH,
  ARRAY_FILTERED_TRACKS,
  ARRAY_FILTERED_GENRE,
  ARRAY_FILTERED_YEAR,
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

export const addSetPause = (playPause) => ({
  type: PLAY_PAUSE,
  payload: { playPause },
})

export const addIdTrack = (idTrack) => ({
  type: ID_TRACK,
  payload: { idTrack },
})

export const addActiveTrack = (activeTrack) => ({
  type: ACTIVE_TRACK,
  payload: activeTrack,
})

export const addShuffleTrack = () => ({
  type: SHUFFLE_TRACKS,
})

export const addNextTrack = () => ({
  type: NEXT_TRACK,
})

export const addPrevTrack = () => ({
  type: PREV_TRACK,
})

export const addShuffled = (shuffled) => ({
  type: SHUFFLE,
  payload: { shuffled },
})

export const addUser = (userID) => ({
  type: USER,
  payload: { userID },
})

export const addFavoriteTracks = (vseIzbranniyeTreki) => ({
  type: FAVORITES_TRACKS,
  payload: { vseIzbranniyeTreki },
})

export const addAllandFav = (AllandFav) => ({
  type: ALLTRACKS_FAVORITETRACKS,
  payload: { AllandFav },
})

export const addUpdateSearch = (search) => ({
  type: SEARCH,
  payload: { search },
})

export const setArrayFilteredTracks = (filteredTracksArray) => ({
  type: ARRAY_FILTERED_TRACKS,
  payload: [filteredTracksArray],
})

ARRAY_FILTERED_GENRE

export const setArrayFilteredGenre = (filteredGenreArray) => ({
  type: ARRAY_FILTERED_GENRE,
  payload: [filteredGenreArray],
})

export const setArrayFilteredYear = (filteredYearArray) => ({
  type: ARRAY_FILTERED_YEAR,
  payload: [filteredYearArray],
})

export default addTracks
