import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAppSelector((state) => state.appState.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true });
    }
  }, [navigate, user]);

  return children;
}