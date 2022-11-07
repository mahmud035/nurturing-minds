import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { CirclesWithBar } from 'react-loader-spinner';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <CirclesWithBar
        height="60"
        width="60"
        color="#38D4C6"
        wrapperStyle={{}}
        wrapperClass="d-flex justify-content-center align-items-center mt-5 min-vh-100"
        visible={true}
        ariaLabel="circles-with-bar-loading"
      />
    );
  }

  if (user && user.uid) {
    <CirclesWithBar
      height="60"
      width="60"
      color="#38D4C6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={false}
      ariaLabel="circles-with-bar-loading"
    />;
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
