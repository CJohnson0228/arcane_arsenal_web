// === redux imports
import { useAppSelector } from '../redux/hooks'

// === route imports
import { Outlet } from 'react-router-dom'

// === styling imports
import styled from '@emotion/styled'
import { colors, spacing } from '../assets/theme/style.constants'

// === styled components
const MainWindowContainer = styled.div({
  marginTop: spacing(6),
  padding: spacing(1),
  color: colors.common.white,
  transition: 'margin 0.4s ease-in-out',
  height: `calc(100vh - ${spacing(6)})`,
  overflowY: 'auto',
  overflowX: 'hidden',
})
  

// === main function
const MainWindow = () => {
  const sideMenuOpen = useAppSelector((state) => state.appState.sideMenu)

  return (
    <MainWindowContainer
      className='MainWindow'
      style={{ marginLeft: sideMenuOpen ? spacing(23) : 0, }}>
      <Outlet />
    </MainWindowContainer>
  )
}

export default MainWindow