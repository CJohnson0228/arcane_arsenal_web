import { createBrowserRouter } from 'react-router-dom'
import { gsapLoader } from '../utilities/gsapLoader'

import Landing from './Landing'
import ErrorPage from './ErrorPage'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './Dashboard'
import Authentication from './Authentication'

import Home from './Dashboard/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />,
    loader: gsapLoader
  },
  {
    path: '/auth',
    element: <Authentication />,
    errorElement: <ErrorPage />,
    loader: gsapLoader
  },
  {
    path: '/dashboard:userID',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    loader: gsapLoader,
  }
])