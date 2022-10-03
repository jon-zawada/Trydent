import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicRoutes = () => {
  const { user } = useAuth();
  return (
    user ? <Navigate to='/' /> : <Outlet />
  );
};

export default PublicRoutes;
