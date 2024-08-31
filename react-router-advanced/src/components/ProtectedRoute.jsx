import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Simulate authentication check
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return children;
}

export default ProtectedRoute;
