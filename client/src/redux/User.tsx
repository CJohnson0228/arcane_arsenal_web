import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  userName: string | null
  email: string | null
  token: string | null
  avatarURL: string | null,
  _id: string | null,
}

const initialState: UserState = {
  userName: null,
  email: null,
  token: null,
  avatarURL: null,
  _id: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.userName = null
      state.email = null
      state.token = null
      state.avatarURL = null
      state._id = null
    },
    userLogin: (state, action: PayloadAction<UserState>) => {
      const { userName, email, token, avatarURL, _id } = action.payload
      if (userName !== undefined) { state.userName = userName } else { state.userName = null }
      if (email !== undefined) { state.email = email } else { state.email = null }
      if (token !== undefined) { state.token = token } else { state.token = null }
      if (avatarURL !== undefined) { state.avatarURL = avatarURL } else { state.avatarURL = null }
      if (_id !== undefined) { state._id = _id } else { state._id = null }
    }
  }
})

export const { userLogin, userLogout } = userSlice.actions

export default userSlice.reducer