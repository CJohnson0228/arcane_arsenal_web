import { useAppSelector } from './hooks/useAppSelector'
import { ThemeProvider } from './styles/ThemeProvider'
import { lightTheme } from './styles/theme/lightTheme'
import { darkTheme } from './styles/theme/darkTheme'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

function App() {
  const isDarkMode = useAppSelector(state => state.appState.isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
