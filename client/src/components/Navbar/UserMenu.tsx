
// === hooks imports
import { useLogout } from '../../hooks/useLogout'
import { useNavigate } from 'react-router-dom'

// === style imports
import { colors, spacing } from '../../assets/theme/style.constants'
import styled from '@emotion/styled'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// === redux imports
import { useAppSelector } from '../../redux/hooks'

// === styled components
const Menu = styled.div({
  position: 'absolute',
  top: spacing(7),
  right: spacing(1),
  backgroundColor: colors.greys[500],
  padding: spacing(2),
  borderRadius: spacing(1),
  opacity: 0,
  visibility: 'hidden',
  minWidth: '200px',
})

const MenuDivider = styled.hr({
  color: colors.greys[300],
  backgroundColor: colors.greys[300],
  height: 1,
  marginTop: spacing(1),
  marginBottom: spacing(1)
})

const MenuHeading = styled.div({
  color: colors.primary[300]
})

const MenuItem = styled.div({
  padding: spacing(0.5),
  cursor: 'pointer',
  transition: 'color 0.2s',
  '&:hover': {
    color: colors.secondary[400],
  }
})

const LogoutButton = styled.div({
  padding: '3px',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: colors.greys[600]
  }
})

// === types
type UserMenuProps = {
  open: boolean
}

const UserMenu = (props: UserMenuProps) => {
  const { open } = props
  const user = useAppSelector((state) => state.user)
  const logout = useLogout()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  const handleProfileNav = () => {
    navigate('/myprofile')
  }

  useGSAP(() => {
    open 
      ? gsap.to('.usermenu', {
        autoAlpha: 1,
        duration: 0.2,
      })
      : gsap.to('.usermenu', {
        autoAlpha: 0,
        duration: 0.2,
      })
  }, [open])

  return (
    <Menu className='usermenu'>
      {user.userName === null
        ? <MenuHeading>{user.email}</MenuHeading>
        : <MenuHeading>{user.userName}</MenuHeading>
      }
      <MenuDivider />
      <MenuItem onClick={handleProfileNav}>Profile</MenuItem>
      <MenuItem>Characters</MenuItem>
      <MenuDivider />
      <LogoutButton onClick={handleLogout}>
        Logout
      </LogoutButton>
    </Menu>
  )
}

export default UserMenu