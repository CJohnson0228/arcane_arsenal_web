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
import DigitalGamingImage from '../../assets/imgs/media_display.png'
import Button from '../General/Button'

// === types
type ImagePropTypes = {
  src: string
}

// === styled components
const DigitalContainer = styled.div({
    padding: spacing(3),
    width: '100%',
    height: '100vh',
    maxHeight: spacing(70),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.greys[200] + '33',
    margin: spacing(10) + " 0",
    borderRadius: '0 50px 0 50px',
  })
  
  const DigitalTextBox = styled.div({
    fontSize: fontSize(6),
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginRight: spacing(4),
  })

  const DigitalHeading = styled.div({
    fontFamily: '"Cinzel Decorative", sans-serif',
    fontSize: fontSize(6),
    lineHeight: spacing(5.5),
    marginBottom: spacing(1),
  })

  const DigitalText = styled.div({
    fontSize: fontSize(5),
    marginTop: spacing(1),
    marginBottom: spacing(1),
  })

  const DigitalImageBox = styled.div<ImagePropTypes>(props => ({
    flexGrow: 1,
    minWidth: '65%',
    backgroundImage: `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }))

const DigitalGaming = () => {
  const DigitalRef = useRef<null|HTMLDivElement>(null)
  const TextRef = useRef<null|HTMLDivElement>(null)
  const ImageRef = useRef<null | HTMLDivElement>(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: DigitalRef.current,
      scroller: '.MainWindow',
      start: 'center bottom+=100px',
      end: 'center top-=100px',
      toggleActions: 'play reverse play reverse'
      }
    })
    timeline.from([DigitalRef.current], {
      autoAlpha: 0,
      x: -1000,
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
    <DigitalContainer ref={DigitalRef}
      className='main-digitalGaming' >
      <DigitalTextBox ref={TextRef}>
        <DigitalHeading>
          Digital Toolset
        </DigitalHeading>
        <DigitalText>
          Roll Dice from your digital character sheet and track your spells, skills, inventory, hit points and all other features of your character in Arsenal Play Mode.
        </DigitalText>
        <DigitalText>
          Simplify all aspects of your character with automated tools that include a digital dice roller for generating any combination of dice rolls needed to play with ease.
        </DigitalText>
        <Button label='Start Now' onClick={() => navigate('/auth')} />
      </DigitalTextBox>
      <DigitalImageBox src={DigitalGamingImage} ref={ImageRef} />
    </DigitalContainer>
  )
}

export default DigitalGaming