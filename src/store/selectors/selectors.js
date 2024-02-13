// селектор - ф-ия которая возвращает состояние приложения
const trackSelector = (store) => store.tracks

const allTracksSelector = (store) => trackSelector(store)?.allTracks || []

// создаем переменную в которую сохраняем состояние текущего трека
export const activeTrackSelector = (store) =>
  trackSelector(store)?.activeTrack || []

export const searchSelector = (store) => trackSelector(store)?.search

export const filteredArrayTracksSelector = (store) =>
  trackSelector(store)?.filteredTracksArray

export const filteredArrayGenreSelector = (store) =>
  trackSelector(store)?.filteredGenreArray

export const filteredArrayYearSelector = (store) =>
  trackSelector(store)?.filteredYearArray

export default allTracksSelector
