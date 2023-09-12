/* eslint-disable default-param-last */
import {
  ADD_TRACK,
  PLAY_TRACK,
  ACTIVE_TRACK,
  PLAY_PAUSE,
  ID_TRACK,
  SHUFFLE_TRACKS,
} from '../actions/types/types'

// state - состояние, может быть объектом или массивом либо приметивное зн-ие, которое хранит какие то данные. Чаще всего это объект, у которого уже есть конкретные поля, которые могут быть как объектами, так и массивами/примитивами.

// Создаем дефолтное состояние, оно присваивается в тот момент когда пользователь открыл приложение
const initialTracks = {
  allTracks: [],
  PLAY_TRACK: [],
  ACTIVE_TRACK: [],
  activeTrack: {},
  idTrack: {},
  shuffleTracks: {},
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

    case ID_TRACK: {
      const { idTrack } = action.payload
      return {
        ...state,
        idTrack, // добавляем в стейт ключ
      }
    }
    case SHUFFLE_TRACKS: {
      const { shuffleTracks } = action.payload
      return {
        ...state,
        shuffleTracks, // добавляем в стейт ключ
      }
    }

    default:
      return state
  }
}

export default tracksReducer
