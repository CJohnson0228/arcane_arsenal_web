import { useRef, useEffect, useState } from 'react'

// === redux imports
import { useAppSelector } from '../redux/hooks'

// === style imports
import { colors, spacing, breakpoints } from '../assets/theme/style.constants'
import styled from '@emotion/styled'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// === component imports
import Avatar from '../components/General/Avatar'

// === styled components
const MainPage = styled.div({
  color: colors.common.white,
  height: `calc( 100vh - ${spacing(9)})`,
  width: '100%',
  maxWidth: breakpoints.max,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  opacity: 0,
  visibility: 'hidden',
})

const MainContainer = styled.div({
  position: 'relative',
  width: breakpoints.md,
  height: '100%',
  backgroundColor: colors.common.paper,
  border: '1px solid ' + colors.greys[500],
})

const AvatarContainer = styled.div({
  position: 'absolute',
  top: '65px',
  left: '50%',
  translate: '-50% 50%',
  zIndex: 10,
  cursor: 'pointer',
  borderRadius: '50%',
  border: '2px solid ' + colors.common.paper,
  transition: 'border 0.3s',
  '&:hover': {
    border: '2px solid ' + colors.secondary[400],
  }
})

const Profile = () => {
  const profileRef = useRef<HTMLDivElement>(null)
  const [ initials, setInitials ] = useState<string|null>(null)
  const [ imageUrl, setImageUrl ] = useState<string|null>(null)
  const user = useAppSelector((state) => state.user)
  
  useGSAP(() => {
    gsap.to([profileRef.current],{
      autoAlpha: 1,
      duration: 0.3,
      delay: 0.2,
      ease: 'power1.inOut'
    })
  })

  useEffect(() => {
    if (user.avatarURL === null) {
      if (user.userName) {
        setInitials(user.userName?.charAt(0))
      }
    } else {
      setImageUrl(user.avatarURL)
    }
  },[user])

  // === styled components (controlled)
  const Backdrop = styled.div({
    border: '2px solid transparent',
    backgroundImage: `url('https://picsum.photos/${breakpoints.md}/200')`,
    height: '200px',
    marginBottom: '70px',
    position: 'relative',
    transition: 'border 0.3s',
    '&:hover': {
      border: '2px solid ' + colors.secondary[400],
    }
  })

  return (
    <MainPage ref={profileRef}>
      <MainContainer>
        <Backdrop />
        <AvatarContainer>
          <Avatar initials={initials} imageUrl={imageUrl} />
        </AvatarContainer>
        <div>Personal Info</div>
        <div>Characters</div>
      </MainContainer>
    </MainPage>
  )
}

export default Profile