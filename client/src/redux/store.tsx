import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User'
import AppStatusReducer from './AppStatus'

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: AppStatusReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store