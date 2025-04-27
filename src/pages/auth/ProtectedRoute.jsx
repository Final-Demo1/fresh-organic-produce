import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Ensure the path is correct

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use context from AuthProvider

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected content
};

export default ProtectedRoute;
