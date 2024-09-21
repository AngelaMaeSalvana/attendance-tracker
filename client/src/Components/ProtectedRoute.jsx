import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, userRole, requiredRole }) => {
    return userRole === requiredRole ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
