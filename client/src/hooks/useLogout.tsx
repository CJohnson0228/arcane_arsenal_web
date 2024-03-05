import { userLogout } from "../redux/User"
import { authLogout } from "../redux/AppStatus"
import { useAppDispatch } from "../hooks/useAppDispatch"

export const useLogout = () => {
  const dispatch = useAppDispatch()

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user')

    // logout of redux
    dispatch(userLogout())
    dispatch(authLogout())
  }

  return logout
}
