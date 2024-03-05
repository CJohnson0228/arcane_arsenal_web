import { useState, useRef, useEffect} from 'react'
import gsap from 'gsap'
import { useTheme } from '../styles/ThemeProvider'
import styled from '@emotion/styled'
import { IoMdLogIn, IoMdCheckmarkCircleOutline } from 'react-icons/io'
import Login from '../components/Landing/Login'
import Register from '../components/Landing/Register'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { authLogin } from '../redux/AppStatus'
import { userLogin } from '../redux/User'

const Landing = () => {
  const theme = useTheme()
  const FormRef = useRef<HTMLDivElement | null>(null)
  const LoginRippleRef = useRef<HTMLSpanElement | null>(null)
  const RegisterRippleRef = useRef<HTMLSpanElement | null>(null)
  const color = useAppSelector(state => state.appState.color)
  const [ isLogin, setIsLogin ] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let user = null
    const storedData = localStorage.getItem('user')
    if (storedData !== null) {
      user = JSON.parse(storedData)
    }
    if (user) {
      dispatch(userLogin(user))
      dispatch(authLogin())
      navigate('/dashboard')
    } else {
      navigate('/auth')
    }
  }, [])
  
  const MainContainer = styled.div({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.common.background,
    color: theme.colors.common.text,
  })

  const LandingContainer = styled.div({
    display: 'flex',
    backgroundColor: theme.colors.common.paper,
  })

  const LandingHeader = styled.div({
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(3),
  })

  const LoginLogo = styled.span({
    fontFamily: '"Cinzel Decorative"',
    color: theme.colors[color][500],
  })

  const ToggleContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
  })

  const ToggleButton = styled.div({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    fontSize: theme.spacing(3),
    flexGrow: 1,
    height: '50%',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: theme.colors.grey[200] + '22',
    }
  })

  const ToggleButtonRipple = styled.span({
    position: 'absolute',
    borderRadius: '50%',
    transform: 'scale(0)',
    width: '480px',
    height: '480px',
    backgroundColor: theme.colors.grey[200] + '30',
  })

  const FormContainer = styled.div({
    padding: theme.spacing(1),
    minHeight: '480px',
    minWidth: '400px',
  })

  const setLoginAnimation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const button = e.currentTarget
    const buttonbox = button.getBoundingClientRect()

    if (button) {
      gsap.fromTo([LoginRippleRef.current], {
        left: e.clientX - (buttonbox.left + 200),
        top: e.clientY - (buttonbox.top + 200),
        opacity: 1,
        scale: 0,
      }, {
        scale: 3,
        opacity: 0,
        duration: 0.5,
        ease: 'linear',
      })
      gsap.to([LoginRippleRef.current], {
        opacity: 0,
        scale: 0,
        duration: 0,
        delay: 0.8,
      })
    }
    if (!isLogin) {
      gsap.to([FormRef.current], {
        opacity: 0,
        duration: 0.4,
        onComplete: () => setIsLogin(true)
      })
    }
  }
  
  const setRegisterAnimation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const button = e.currentTarget
    const buttonbox = button.getBoundingClientRect()

    if (button) {
      gsap.fromTo([RegisterRippleRef.current], {
        left: e.clientX - (buttonbox.left + 200),
        top: e.clientY - (buttonbox.top + 200),
        opacity: 1,
        scale: 0,
      }, {
        scale: 3,
        opacity: 0,
        duration: 0.5,
        ease: 'linear',
      })
      gsap.to([RegisterRippleRef.current], {
        opacity: 0,
        scale: 0,
        duration: 0,
        delay: 0.8,
      })
    }
    if (isLogin) {
      gsap.to([FormRef.current], {
        opacity: 0,
        duration: 0.4,
        onComplete: () => setIsLogin(false)
      })
    }
  }

  return (
    <MainContainer className='content'>
        <LandingHeader>Welcome to <LoginLogo>Arcane Arsenal</LoginLogo></LandingHeader>
      <LandingContainer>
        <ToggleContainer>
          <ToggleButton
            onClick={setLoginAnimation}
            style={{ color: isLogin ? theme.colors.orange[500] : theme.colors.grey[300] }}
          >
            <ToggleButtonRipple ref={LoginRippleRef} />
            <IoMdLogIn />
          </ToggleButton>
          <ToggleButton
            onClick={setRegisterAnimation}
            style={{ color: isLogin ? theme.colors.grey[300] : theme.colors.orange[500] }}
          >
            <ToggleButtonRipple ref={RegisterRippleRef} />
            <IoMdCheckmarkCircleOutline />
          </ToggleButton>
        </ToggleContainer>
        <FormContainer ref={FormRef}>
          {isLogin
            ? <Login />
            : <Register />
          }
        </FormContainer>
      </LandingContainer>
    </MainContainer>
  )
}

export default Landing