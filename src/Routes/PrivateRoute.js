import React, { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <progress className="progress w-64 mx-auto mt-5 "></progress>
  }
  if (user && user.uid) { return children }

  return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;