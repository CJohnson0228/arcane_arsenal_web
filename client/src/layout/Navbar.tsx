import { useState } from 'react'

// === style imports
import { colors, breakpoints, spacing, fontSize, zIndex, shadows } from '../assets/theme/style.constants'
import styled from '@emotion/styled'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// === redux imports
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { toggleSideMenu } from '../redux/AppStatus'

// === component imports
import { MdMenu } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import UserMenu from '../components/Navbar/UserMenu'

// === styled components
const NavbarMain = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  backgroundColor: colors.common.background,
  color: colors.common.white,
  boxShadow: shadows.boxShadows[200],
  position: 'fixed',
  left: 0,
  top: 0,
  height: spacing(6),
  zIndex: zIndex.drawer + 1,
})

const NavbarContainer = styled.div({
  width: '100vw',
  maxWidth: breakpoints.max,
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const MenuArea = styled.div({
  padding: spacing(1),
})

const MenuButton = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: spacing(1),
  borderRadius: '50%',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: colors.greys[700],
  }
})

const LogoContainer = styled.div({
  flexGrow: 1,
  lineHeight: spacing(2.5),
  fontSize: fontSize(5),
  fontFamily: '"Cinzel Decorative", sans-serif',
  marginLeft: spacing(1),
})

const AccountArea = styled.div({
  position: 'relative',
  padding: spacing(1),
})

const AccountButton = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: spacing(1),
  borderRadius: '50%',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: colors.greys[700],
  }
})

// === main function
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const auth = useAppSelector((state) => state.appState.auth)
  const dispatch = useAppDispatch()

  useGSAP(() => {
    menuOpen 
      ? gsap.to('.usermenu', {
        autoAlpha: 1,
        duration: 0.2,
      })
      : gsap.to('.usermenu', {
        autoAlpha: 0,
        duration: 0.2,
      })
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <NavbarMain>
      <NavbarContainer>
        <MenuArea>
          <MenuButton onClick={() => dispatch(toggleSideMenu())}><MdMenu /></MenuButton>
        </MenuArea>
        <LogoContainer>Arcane Arsenal</LogoContainer>
        {
          auth &&
          <AccountArea>
            <AccountButton onClick={toggleMenu}>
              <FaUserCircle />
              </AccountButton>
              <UserMenu open={menuOpen} />
          </AccountArea>
        }
      </NavbarContainer>
    </NavbarMain>
  )
}

export default Navbar