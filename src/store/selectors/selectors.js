// селектор - ф-ия которая возвращает состояние приложения
const trackSelector = (store) => store.tracks

const allTracksSelector = (store) => trackSelector(store)?.allTracks || []

// создаем переменную в которую сохраняем состояние текущего трека
export const activeTrackSelector = (store) =>
  trackSelector(store)?.activeTrack || []

export default allTracksSelector
