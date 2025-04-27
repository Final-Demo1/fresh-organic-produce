import React from 'react'
import { useNavigate } from 'react-router';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to the login page after logging out
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};


export default Logout