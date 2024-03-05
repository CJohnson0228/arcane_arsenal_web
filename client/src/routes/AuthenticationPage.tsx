import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// == hooks imports
import { useSignUp } from '../hooks/useSignup'
import { useLogin } from '../hooks/useLogin'

// === component imports
import TextInput from '../components/General/TextInput'
import Button from '../components/General/Button'

// === styling imports
import styled from '@emotion/styled'
import { colors, spacing, shadows, fontSize } from '../assets/theme/style.constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// === styled components
const AuthenticationContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  opacity: 0,
  visibility: 'hidden',
})

const AuthContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors.common.paper,
  boxShadow: shadows.boxShadows[300],
  border: '1px solid',
  borderColor: colors.greys[400],
  color: colors.common.white,
})

const HeadingContainer = styled.div({
  textAlign: 'center',
  padding: spacing(3),
})

const Title = styled.div({
  fontFamily: '"Cinzel Decorative", san-serif',
  fontSize: fontSize(8),
  color: colors.secondary[300],
  textShadow: shadows.textShadows[200],
})

const Subtitle = styled.div({
  fontFamily: '"Montserrat", san-serif',
  fontSize: fontSize(4),
  color: colors.greys[200],
})

const Subspan = styled.span({
  color: colors.common.white,
})

const SectionsContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  padding: spacing(2),
  paddingBottom: spacing(3),
  flexWrap: 'wrap',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'center',
  }
})

const SectionContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: spacing(2),
  flexGrow: 1,
  height: '100%',
  width: 'auto',
  '@media (max-width: 900px)': {
    height: 'auto',
    width: '100%',
  }
})

const LoginDivider = styled.div({
  borderLeft: '1px solid ' + colors.primary[700],
  height: '60%',
  margin: 'auto ' + spacing(1),
  borderTop: 'none',
  width: '1px',
  '@media (max-width: 900px)': {
    borderTop: '1px solid ' + colors.primary[700],
    borderLeft: 'none',
    height: '1px',
    width: '60%',
    margin: spacing(1) + ' auto',
  }
})

const InputSection = styled.form({
  flexGrow: 1,
  '@media (max-width: 900px)': {
    flexGrow: 0,
  }
})

const SectionHeader = styled.div({
  textAlign: 'center',
  color: colors.primary[400],
  borderBottom: '1px solid ' + colors.primary[400],
  fontFamily: '"Cinzel Decorative", sans-serif',
  fontSize: fontSize(6),
})

const ButtonContainer = styled.div({
  marginTop: spacing(2),
})

const ErrorMessage = styled.div({
  backgroundColor: colors.warning[500],
  color: colors.common.white,
  textAlign: 'center',
  padding: spacing(1)
})

// === main function
const AuthenticationPage = () => {
  const [loginEmail, setLoginEmail] = useState<string>()
  const [createEmail, setCreateEmail] = useState<string>()
  const [loginPassword, setLoginPassword] = useState<string>()
  const [createPassword, setCreatePassword] = useState<string>()
  const [userName, setUserName] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const AuthRef = useRef<HTMLDivElement>(null)
  const { signup, registerError, registerIsLoading } = useSignUp()
  const { login, loginError, loginIsLoading } = useLogin()
  const navigate = useNavigate()

  useGSAP(() => {
    gsap.to([AuthRef.current], {
      autoAlpha: 1,
      duration: 0.5,
      delay: 0.2,
      ease: 'power1.inOut'
    })
  })

  const handleLoginSubmit = async () => {
    await login(loginEmail, loginPassword)
  }

  const handleRegisterSubmit = async () => {
    await signup(userName, createEmail, createPassword, confirmPassword)
  }
  
  return (
    <AuthenticationContainer className='content' ref={AuthRef}>
      <AuthContainer>
        <HeadingContainer>
          <Title>Begin Your Adventure</Title>
          <Subtitle><Subspan>Login</Subspan> or <Subspan>Create</Subspan> an Account</Subtitle>
        </HeadingContainer>
        <SectionsContainer>

          <SectionContainer>
            <SectionHeader>Login</SectionHeader>
            {loginError && <ErrorMessage className='error'>{loginError}</ErrorMessage>}
            <InputSection id='Login'>
              <TextInput
                label='email'
                placeholder='email'
                type='email'
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.currentTarget.value)}
              />
              <TextInput
                label='password'
                placeholder='password'
                type='password'
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.currentTarget.value)}
              />
            </InputSection>
            <ButtonContainer>
              <Button variant='secondary' label='Login' type='submit' disabled={registerIsLoading || loginIsLoading} onClick={handleLoginSubmit}/>
            </ButtonContainer>
          </SectionContainer>

          <LoginDivider />

          <SectionContainer>
            <SectionHeader>Create</SectionHeader>
            {registerError && <ErrorMessage className='error'>{registerError}</ErrorMessage>}
            <InputSection id='Register'>
              <TextInput
                label='username'
                placeholder='username'
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
              />
              <TextInput
                label='email'
                placeholder='email'
                type='email'
                value={createEmail}
                onChange={(e) => setCreateEmail(e.currentTarget.value)}
              />
              <TextInput
                label='password'
                placeholder='password'
                type='password'
                value={createPassword}
                onChange={(e) => setCreatePassword(e.currentTarget.value)}
              />
              <TextInput
                label='confirm password'
                placeholder='confirm password'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              />
            </InputSection>
            <ButtonContainer>
              <Button variant='secondary' label='Create' type='submit' disabled={registerIsLoading || loginIsLoading} onClick={handleRegisterSubmit}/>
            </ButtonContainer>
          </SectionContainer>

        </SectionsContainer>
        <Button variant='warning' label='Cancel' onClick={() => navigate('/landing')} />
      </AuthContainer>
    </AuthenticationContainer>
  )
}

export default AuthenticationPage