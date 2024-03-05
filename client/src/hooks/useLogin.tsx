import { useState } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { userLogin } from '../redux/User'
import { authLogin } from '../redux/AppStatus'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const [ loginError, setLoginError ] = useState<string|null>(null)
  const [ loginIsLoading, setLoginIsLoading ] = useState<boolean | null>(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const login = async (email: string|undefined, password: string|undefined) => {
    setLoginIsLoading(true)
    setLoginError(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    })

    const json = await response.json()

    if (!response.ok) {
      setLoginIsLoading(false)
      setLoginError(json.error)
    }

    if (response.ok) {
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update user in redux
      dispatch(userLogin(json))
      dispatch(authLogin())

      setLoginIsLoading(false)
      navigate('/dashboard')
    }
  }

  return { login, loginIsLoading, loginError }
}