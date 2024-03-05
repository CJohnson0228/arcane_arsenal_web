import { useRef } from 'react'

// === styling imports
import styled from '@emotion/styled'
import { colors, fontSize, spacing } from '../../assets/theme/style.constants'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

// === component imports
import Sparks from '../../assets/imgs/Lighnting.png'

// === styled components
const SplashContainer = styled.div({
  width: '100%',
  height: '100vh',
  maxHeight: spacing(130),
  backgroundImage: `url(${Sparks})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const SplashHeadingContainer = styled.div({
  backgroundColor: colors.common.paper,
  padding: spacing(3) + ' ' + spacing(6),
  fontFamily: '"Cinzel Decorative", cursive',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const SplashHeading = styled.div({
  fontSize: fontSize(10),
  fontFamily: '"Cinzel Decorative", cursive',
  textAlign: 'center',
})

const SplashSubHeading = styled.div({
  fontSize: fontSize(6),
  fontFamily: '"Montserrat", sans-serif',
  color: colors.secondary[500],
})

// === main function
const Splash = () => {
  const ContainerRef = useRef<null | HTMLDivElement>(null)
  const HeadingContainerRef = useRef<null | HTMLDivElement>(null)
  const HeadingRef = useRef<null | HTMLDivElement>(null)
  const SubHeadingRef = useRef<null | HTMLDivElement>(null)

  useGSAP(() => {
    const Timeline = gsap.timeline({})
    Timeline.from([ContainerRef.current], {
      scale: 0,
      rotate: -360,
      duration: 1,
    })
    Timeline.from([HeadingContainerRef.current], {
      scale: 0,
      duration: 0.5,
    }, '>-=0.3')
    Timeline.from([HeadingRef.current], {
      scale: 0,
      y: -50,
      duration: 0.3,
    })
    Timeline.from([SubHeadingRef.current], {
      scale: 0,
      y: 50,
      duration: 0.3,
    })
  })

  return (
    <SplashContainer
      ref={ContainerRef}
      className='main-splash'>
      <SplashHeadingContainer
        ref={HeadingContainerRef}
        className='container-splash'>
        <SplashHeading
          ref={HeadingRef}
          className="heading-splash">
            Welcome to the Arcane Arsenal
        </SplashHeading>
        <SplashSubHeading
          ref={SubHeadingRef}
          className="sub-heading-splash">
            A Table Top RPG Character App
        </SplashSubHeading>
        </SplashHeadingContainer>
    </SplashContainer>  
  )
}

export default Splash