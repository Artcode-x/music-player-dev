import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './reducers/reducers'

//  В configureStore необходимо первым параметром передать reducer
const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
})

export default store
