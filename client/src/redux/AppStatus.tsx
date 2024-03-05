import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
  sideMenu: boolean
  auth: boolean
  isDarkMode: boolean
  color: 'red'|'orange'|'yellow'|'green'|'blue'|'violet'|'purple'|'pink'|'grey'
}

const initialState: AppState = {
  sideMenu: false,
  auth: false,
  isDarkMode: true,
  color: 'orange'
}

export const appStatus = createSlice({
  name: 'appStatus',
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.sideMenu = !state.sideMenu 
    },
    authLogin: (state) => {
      state.auth = true
    },
    authLogout: (state) => {
      state.auth = false
    },
    toggleIsDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    }
  }
})

export const { toggleSideMenu, authLogin, authLogout, toggleIsDarkMode } = appStatus.actions

export default appStatus.reducer