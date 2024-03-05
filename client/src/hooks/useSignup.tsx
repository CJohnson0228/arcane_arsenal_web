import { useState } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { userLogin } from '../redux/User'
import { authLogin } from '../redux/AppStatus'
import { useNavigate } from 'react-router-dom'

export const useSignUp = () => {
  const [ registerError, setRegisterError ] = useState<string|null>(null)
  const [ registerIsLoading, setRegisterIsLoading] = useState<boolean | null>(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const signup = async (
    userName: string | undefined,
    email: string | undefined,
    password: string | undefined,
    confirmPassword: string | undefined
  ) => {
    setRegisterIsLoading(true)
    setRegisterError(null)

    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({userName, email, password, confirmPassword})
    })

    const json = await response.json()

    if (!response.ok) {
      setRegisterIsLoading(false)
      setRegisterError(json.error)
    }

    if (response.ok) {
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update user in redux
      dispatch(userLogin(json))
      dispatch(authLogin())

      setRegisterIsLoading(false)
      navigate('/dashboard')
    }
  }

  return { signup, registerIsLoading, registerError }
}