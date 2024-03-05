import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useLogin } from '../../hooks/useLogin'
import TextField from '../General/TextField'
import Button from '../General/Button'

const LoginWindow = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '16px',
})

function Login () {
  const LoginRef = useRef<HTMLDivElement | null>(null)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const color = useAppSelector(state => state.appState.color)
  const { login, loginError, loginIsLoading } = useLogin()
  const theme = useTheme()

  useGSAP(() => {
    gsap.fromTo([LoginRef.current], {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 0.4,
      delay: 0.2,
    })
  })


  const LoginHeader = styled.div({
    marginBottom: theme.spacing(2),
    padding: '0 ' + theme.spacing(2),
    fontSize: theme.spacing(2.5),
    borderBottom: '1px solid ' + theme.colors[color][500],
  })

  const ErrorDiv = styled.div({
    backgroundColor: theme.colors.red[500],
    color: theme.colors.common.white,
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
  })

  const handleSubmit = async () => {
    await login(email, password)
  }

  return (
    <LoginWindow ref={LoginRef} id='Login'>
      <LoginHeader>Login to Continue</LoginHeader>
      { loginError && <ErrorDiv>{loginError}</ErrorDiv> }
      <TextField type='email' label='Email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
      <TextField type='password' label='Password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
      <Button label='Login' color={color} variant='filled' shape='round' onClick={handleSubmit}/>
    </LoginWindow>
  )
}

export default Login