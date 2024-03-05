

// === redux imports
import { useAppSelector } from '../redux/hooks'

// === styling imports
import styled from '@emotion/styled'
import { colors, spacing, zIndex } from '../assets/theme/style.constants'

// === styled components
const SideMenuMain = styled.div({
  position: 'absolute',
  left: spacing(-23),
  top: 0,
  width: spacing(23),
  height: '100vh',
  zIndex: zIndex.drawer,
  backgroundColor: colors.common.paper,
  transition: 'left 0.4s ease-in-out',
})

const SideMenuContainer = styled.div({
  marginTop: spacing(6),
  padding: spacing(1),
  color: colors.common.white,
})

// === main function
const SideMenu = () => {
  const sideMenuOpen = useAppSelector((state) => state.appState.sideMenu)
  return (
    <SideMenuMain style={{ left: sideMenuOpen ? 0 : spacing(-23) }}>
      <SideMenuContainer>
        SideMenu
      </SideMenuContainer>
    </SideMenuMain>
  )
}

export default SideMenu