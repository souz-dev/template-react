import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from '../app/hooks/use-auth'

interface IAuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: IAuthGuardProps) {
  //   const { signedIn } = useAuth()
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
