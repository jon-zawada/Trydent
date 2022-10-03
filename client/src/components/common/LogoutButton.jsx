import React from 'react';
import { useAuth } from '../../hooks/useAuth';

/* THIS WILL BE DELETED */
const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <button onClick={logout}>LOGOUT</button>
  );
};

export default LogoutButton;
