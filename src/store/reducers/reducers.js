/* eslint-disable default-param-last */

import {
  ADD_TRACK,
  PLAY_PAUSE,
  ID_TRACK,
  SHUFFLE_TRACKS,
  NEXT_TRACK,
  SHUFFLE,
  PREV_TRACK,
  ACTIVE_TRACK,
  USER,
  FAVORITES_TRACKS,
  ALLTRACKS_FAVORITETRACKS,
  SEARCH,
  ARRAY_FILTERED_TRACKS,
  ARRAY_FILTERED_GENRE,
  ARRAY_FILTERED_YEAR,
} from '../actions/types/types'

// state - состояние, может быть объектом или массивом либо приметивное зн-ие, которое хранит какие то данные. Чаще всего это объект, у которого уже есть конкретные поля, которые могут быть как объектами, так и массивами/примитивами.

// Создаем дефолтное состояние, оно присваивается в тот момент когда пользователь открыл приложение
const initialTracks = {
  allTracks: [],
  activeTrack: null,
  idTrack: {},
  newShuffleTracksArray: {},
  shuffled: false,
  userID: {},
  vseIzbranniyeTreki: [],
  AllandFav: 'All',
  search: '',
  filteredTracksArray: [],
  filteredGenreArray: [],
  filteredYearArray: [],
}

// reducer - ф-ия может быть обьявл-на через func-on, либо через стрел ф-ию. Первым параметром принимает состояние, а вторым - action.
// Action - ом явл-ся просто js обьект, у которого обязательно должно быть поле "type", по нему мы будем определять как состояние будет изменяться. Также в action можно передать любое кол-во данных, чаще всего их передают в поле "payload"
function tracksReducer(state = initialTracks, action) {
  // После создания редюсера, в нем необходимо производить какую то логику, вся логика фокус-ся на том, какой action был проброшен в ф-ию. Поэтому создается конструкция switch case, в которой будем отслеживать тип проброшенного action.
  // По default-y эта конструкция обязательно должна возвращать state. Т.Е. если прилетел тип с action-oм который мы не обрабатываем ни в каком кейсе, то мы будем возвращать не измененное состояние. (которое есть на текущий момент)
  switch (action.type) {
    case ADD_TRACK: {
      const { tracks } = action.payload // из payload распаковываем tracks
      // Как мы должны изменять состояние: Изнач-но сост-ие в redux явл-ся неизменяемым, -> т.е. мы каждый раз должны возвращать новый обьект. Поэтому мы создаем новый объект, в него разворачиваем с пом-ю оператора spread "..." старое состояние, и изменяем уже какое то конкретное поле. В данном случае allTracks.
      return {
        ...state, // сохраняем предыдущий стейт
        allTracks: tracks, // записываем в allTracks - треки (tracks)
      }
    }

    case PLAY_PAUSE: {
      const { playPause } = action.payload
      return {
        ...state,
        playPause, // добавляем в стейт ключ
      }
    }

    case ACTIVE_TRACK: {
      const test = action.payload
      return {
        ...state,
        activeTrack: test, // добавляем в стейт ключ
      }
    }

    case ID_TRACK: {
      const { idTrack } = action.payload
      return {
        ...state,
        idTrack, // добавляем в стейт ключ
      }
    }
    case SHUFFLE_TRACKS: {
      if (state.shuffled === true) {
        return { ...state, shuffled: false } // откл кноппку
      }
      const newShuffleTracksArray = state.allTracks.map((track) => track)
      newShuffleTracksArray.sort(() => Math.random() - 0.5)
      return {
        ...state,
        newShuffleTracksArray,
        shuffled: true, // включаем кнопку шафл
        idTrack: { index: 'novyi id' },
      }
    }

    case SHUFFLE: {
      const { shuffled } = action.payload
      return {
        ...state,
        shuffled,
      }
    }

    // Пример логики смены трека
    case NEXT_TRACK: {
      const playlist = state.shuffled
        ? state.newShuffleTracksArray
        : state.allTracks

      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.idTrack.index
      )

      const newTrack = playlist[currentTrackIndex + 1]

      if (!newTrack) {
        return state
      }

      return {
        ...state,
        activeTrack: newTrack,
        idTrack: { index: newTrack.id },
      }
    }

    case PREV_TRACK: {
      const playlist = state.shuffled
        ? state.newShuffleTracksArray
        : state.allTracks

      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.idTrack.index
      )

      const prevTrack = playlist[currentTrackIndex - 1]

      if (!prevTrack) {
        return state
      }

      return {
        ...state,
        activeTrack: prevTrack,
        idTrack: { index: prevTrack.id },
      }
    }

    case USER: {
      const { userID } = action.payload
      return {
        ...state,
        userID,
      }
    }

    case FAVORITES_TRACKS: {
      const { vseIzbranniyeTreki } = action.payload
      return {
        ...state,
        vseIzbranniyeTreki,
      }
    }

    case FAVORITES_TRACKS: {
      const { vseIzbranniyeTreki } = action.payload
      return {
        ...state,
        vseIzbranniyeTreki,
      }
    }

    case ALLTRACKS_FAVORITETRACKS: {
      const { AllandFav } = action.payload
      return {
        ...state,
        AllandFav,
      }
    }

    case SEARCH: {
      const { search } = action.payload
      return {
        ...state,
        search,
      }
    }

    case ARRAY_FILTERED_TRACKS: {
      const [filteredTracksArray] = action.payload
      return {
        ...state,
        filteredTracksArray,
      }
    }

    case ARRAY_FILTERED_GENRE: {
      const [filteredGenreArray] = action.payload
      return {
        ...state,
        filteredGenreArray,
      }
    }

    case ARRAY_FILTERED_YEAR: {
      const [filteredYearArray] = action.payload
      return {
        ...state,
        filteredYearArray,
      }
    }

    default:
      return state
  }
}

export default tracksReducer
