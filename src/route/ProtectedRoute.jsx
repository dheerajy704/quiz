import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { token } = JSON.parse(localStorage.getItem('user')) ?? { token: '' };

  if (!token) {
    alert('Please Signin/Signup you are not authorized yet');
    return <Navigate to={'/'} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
