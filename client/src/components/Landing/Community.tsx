import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// === styling imports
import styled from '@emotion/styled'
import { colors, fontSize, spacing } from '../../assets/theme/style.constants'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// === component imports
import DigitalCommunityImage from '../../assets/imgs/digitalcommunities.jpg'
import Button from '../General/Button'

// === types
type ImagePropTypes = {
  src: string
}

// === styled components
const CommunityContainer = styled.div({
  padding: spacing(3),
  width: '100%',
  height: '100vh',
  maxHeight: spacing(70),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: colors.greys[200] + '33',
  margin: spacing(10) + " 0",
  borderRadius: '50px 0 50px 0',
})

const CommunityTextBox = styled.div({
  fontSize: fontSize(6),
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  marginLeft: spacing(4),
})

const CommunityHeading = styled.div({
  fontFamily: '"Cinzel Decorative", sans-serif',
  fontSize: fontSize(5),
  lineHeight: spacing(5.5),
  marginBottom: spacing(1),
})

const CommunityText = styled.div({
  fontSize: fontSize(4.5),
  marginTop: spacing(1),
  marginBottom: spacing(1),
})

const CommunityImageBox = styled.div<ImagePropTypes>(props => ({
  flexGrow: 1,
  minWidth: '55%',
  backgroundImage: `url(${props.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  border: '3px solid ' + colors.primary[400],
  borderRadius: spacing(1),
}))

// === main function
const Community = () => {
  const CommunityRef = useRef<null|HTMLDivElement>(null)
  const TextRef = useRef<null|HTMLDivElement>(null)
  const ImageRef = useRef<null | HTMLDivElement>(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: CommunityRef.current,
      scroller: '.MainWindow',
      start: 'center bottom+=100px',
      end: 'center top-=100px',
      toggleActions: 'play reverse play reverse'
      }
    })
    timeline.from([CommunityRef.current], {
      autoAlpha: 0,
      x: 1000,
      duration: 0.7,
    })
    timeline.from([TextRef.current], {
      opacity: 0,
      duration: 0.3,
    }, '>')
    timeline.from([ImageRef.current], {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    }, '<')
  })

  
  
  return (
    <CommunityContainer ref={CommunityRef}
      className='main-community' >
      <CommunityImageBox src={DigitalCommunityImage}  ref={ImageRef}  />
      <CommunityTextBox ref={TextRef}>
        <CommunityHeading>
          Community Characters
        </CommunityHeading>
        <CommunityText>
          Browse through hundreds of characters created by the community. Gain inspiration for your next adventure, or as a Game Master, find some intersting ideas for NPCs in your next campaign.
        </CommunityText>
        <Button label='Browse Community Characters' onClick={() =>  navigate('/auth')} />
      </CommunityTextBox>
    </CommunityContainer>
  )
}

export default Community