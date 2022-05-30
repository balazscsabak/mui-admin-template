import { Navigate, useLocation, useParams, useRoutes } from 'react-router-dom';

const AuthHandler = ({ children, loggedIn }: any) => {
	const route = useLocation();

	if (loggedIn && route.pathname === '/login')
		return <Navigate to="/" replace />;

	if (!loggedIn && route.pathname !== '/login')
		return <Navigate to="/login" replace />;

	return children;
};

export default AuthHandler;
