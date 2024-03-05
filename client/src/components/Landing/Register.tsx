import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styled from '@emotion/styled'
import { useTheme } from '../../styles/ThemeProvider'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useSignUp } from '../../hooks/useSignup'
import TextField from '../General/TextField'
import Button from '../General/Button'

const RegisterWindow = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '16px',
})
  
function Register () {
  const RegisterRef = useRef<HTMLDivElement | null>(null)
  const [ userName, setUserName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const color = useAppSelector(state => state.appState.color)
  const { signup, registerError, registerIsLoading } = useSignUp()
  const theme = useTheme()

  useGSAP(() => {
    gsap.fromTo([RegisterRef.current], {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 0.4,
      delay: 0.2,
    })
  })

  

  const RegisterHeader = styled.div({
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
    await signup(userName, email, password, confirmPassword)
  }

  return (
    <RegisterWindow ref={RegisterRef} id='Register'>
      <RegisterHeader>Create an Account</RegisterHeader>
      { registerError && <ErrorDiv>{registerError}</ErrorDiv> }
      <TextField type='text' label='UserName' value={userName} onChange={(e) => setUserName(e.currentTarget.value)}/>
      <TextField type='email' label='Email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
      <TextField type='password' label='Password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
      <TextField type='password' label='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.currentTarget.value)}/>
      <Button label='Sign Up' color={color} variant='filled' shape='round' onClick={handleSubmit}/>
    </RegisterWindow>
  )
}

export default Register