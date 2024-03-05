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
import BeginImage from '../../assets/imgs/dnd_whatisdnd_players.jpg'
import Button from '../General/Button'

// === types
type ImagePropTypes = {
  src: string
}

// === styled components
const BeginContainer = styled.div({
  padding: spacing(3),
  width: '100%',
  height: '100%',
  minHeight: spacing(70),
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'row',
  backgroundColor: colors.greys[200] + '33',
  margin: spacing(10) + " 0",
  borderRadius: '0 50px 0 50px',
})

const BeginTextBox = styled.div({
  fontSize: fontSize(6),
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  marginRight: spacing(4),
})

const BeginHeading = styled.div({
  fontFamily: '"Cinzel Decorative", sans-serif',
  fontSize: fontSize(5),
  lineHeight: spacing(5.5),
  marginBottom: spacing(1),
})

const BeginText = styled.div({
  fontSize: fontSize(4.5),
  marginTop: spacing(1),
  marginBottom: spacing(1),
})

const RulesetList = styled.ul({
  paddingLeft: spacing(3),
  listStyleType: 'circle',
  color: colors.secondary[300],
  fontSize: fontSize(4.5),
})

const RulesetListItem = styled.li({
  padding: spacing(0.5),
})

const BeginImageBox = styled.div<ImagePropTypes>(props => ({
  flexGrow: 1,
  minWidth: '55%',
  backgroundImage: `url(${props.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  border: '3px solid ' + colors.primary[400],
  borderRadius: spacing(1),
}))

  
const Begin = () => {
  const BeginRef = useRef<null|HTMLDivElement>(null)
  const TextRef = useRef<null|HTMLDivElement>(null)
  const ImageRef = useRef<null | HTMLDivElement>(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: BeginRef.current,
      scroller: '.MainWindow',
      start: 'center bottom+=100px',
      end: 'center top-=100px',
      toggleActions: 'play reverse play reverse'
      }
    })
    timeline.from([BeginRef.current], {
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
    <BeginContainer ref={BeginRef}
      className='main-begin'>
      <BeginTextBox ref={TextRef}>
        <BeginHeading>
          Begin your Adventure!
        </BeginHeading>
        <BeginText>
          The Arcane Arsenal is a table top gamers go to resource for character building across <span>5</span> different TTRPG rulesets. Core rules as well as some expansions of:
        </BeginText>
        <RulesetList>
          <RulesetListItem>Dungeons and Dragons 5e</RulesetListItem>
          <RulesetListItem>Pathfinder 2e</RulesetListItem>
          <RulesetListItem>The One Ring RPG</RulesetListItem>
          <RulesetListItem>Starfinder</RulesetListItem>
          <RulesetListItem>Shadowrun 6e</RulesetListItem>
        </RulesetList>
        <BeginText>
          are all incorporated into the character builders that Arcane Arsenal provides. Create an account, pick a ruleset, then let the story BEGIN!!!!
        </BeginText>
        <Button label='Get Started' onClick={() => navigate('/auth')}/>
      </BeginTextBox>
      <BeginImageBox className='image-begin' src={BeginImage} ref={ImageRef} />
    </BeginContainer>
  )
}

export default Begin