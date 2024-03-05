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
import CharSheetStack from '../../assets/imgs/CharSheetStack.png'
import Button from '../General/Button'

// === types
type ImagePropTypes = {
  src: string
}

// === styled components
const CreateContainer = styled.div({
  padding: spacing(3),
  width: '100%',
  height: '100vh',
  maxHeight: spacing(70),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: colors.greys[200] + '33',
  color: colors.common.white,
  margin: spacing(10) + " 0",
  borderRadius: '50px 0 50px 0',
})

const CreateTextBox = styled.div({
  fontSize: fontSize(6),
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  marginLeft: spacing(4),
})

const CreateHeading = styled.div({
  fontFamily: '"Cinzel Decorative", sans-serif',
  fontSize: fontSize(5),
  lineHeight: spacing(5.5),
  marginBottom: spacing(2),
})

const CreateText = styled.div({
  fontSize: fontSize(4.5),
  marginTop: spacing(1),
  marginBottom: spacing(1),
})

const CreateImageBox = styled.div<ImagePropTypes>(props => ({
  flexGrow: 1,
  minWidth: '55%',
  backgroundImage: `url(${props.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  border: '3px solid ' + colors.primary[400],
  borderRadius: spacing(1),
}))

const Create = () => {
  const CreateRef = useRef<null|HTMLDivElement>(null)
  const TextRef = useRef<null|HTMLDivElement>(null)
  const ImageRef = useRef<null | HTMLDivElement>(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: CreateRef.current,
      scroller: '.MainWindow',
      start: 'center bottom+=100px',
      end: 'center top-=100px',
      toggleActions: 'play reverse play reverse'
      }
    })
    timeline.from([CreateRef.current], {
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
    <CreateContainer ref={CreateRef}
      className='main-create'>
      <CreateImageBox src={CharSheetStack}  ref={ImageRef} />
      <CreateTextBox ref={TextRef}>
        <div>
          <CreateHeading>
            Create your Character
          </CreateHeading>
          <CreateText>
            The Arcane Arsenal character builder lets you create a character for any of the 5 Tabletop RPG rulesets in minutes and just straight into the action.
          </CreateText>
          <CreateText>
            Fight Dragons, explore space, defeat the forces of Sauron, forge your mythic path, or hack your way into a massive corporate conglomerate, the choices is entirely yours.
          </CreateText>
        </div>
        <Button label='Create an Account' onClick={() => navigate('/auth')} />
      </CreateTextBox>
    </CreateContainer>
  )
}

export default Create