import { useRef } from 'react'

// === styling imports
import styled from '@emotion/styled'
import { colors, spacing } from '../../assets/theme/style.constants'

// === component imports
import DungeonsDragonsCard from '../../assets/imgs/DnDCard.png'
import PathfinderCard from '../../assets/imgs/PathfinderCard.png'
import TheOneRingCard from '../../assets/imgs/TheOneRingCard.png'
import StarfinderCard from '../../assets/imgs/StarfinderCard.png'
import ShadowrunCard from '../../assets/imgs/ShadowrunCard.png'

const Cores = () => {
  const MainRef = useRef<null | HTMLDivElement>(null)

  const CoresContainer = styled.div({
    padding: '0 ' + spacing(2),
    width: '100%',
    height: '100vh',
    maxHeight: spacing(70),
    display: 'flex',
    flexDirection: 'row',
    scale: 1,
    opacity: 1,
    margin: spacing(4) + ' auto',
  })

  interface CardPropTypes {
    src: string
  }

  const CoreCard = styled.div<CardPropTypes>(props => ({
    height: '100%',
    flexGrow: 1,
    backgroundImage: `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    border: '3px solid',
    borderColor: colors.greys[500],
    transition: 'flex-grow 0.3s ease-in-out, border-color 0.3s ease-in-out',
    '&:hover': {
      flexGrow: 20,
      borderColor: colors.secondary[500]
    }
  }))
    
  return (
    <CoresContainer
      ref={MainRef}
      className='main-cores'>
      <CoreCard src={DungeonsDragonsCard} />
      <CoreCard src={PathfinderCard} />
      <CoreCard src={TheOneRingCard} />
      <CoreCard src={StarfinderCard} />
      <CoreCard src={ShadowrunCard} />
    </CoresContainer>
  )
}

export default Cores