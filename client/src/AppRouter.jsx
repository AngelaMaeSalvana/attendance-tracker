import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import UserDashboard from './Pages/User/UserDashboard';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ProtectedRoute from './Components/ProtectedRoute';

function AppRouter({ userRole, setUserRole }) {
    return (
        <Routes>
            <Route path="/login" element={<Login setUserRole={setUserRole} />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/user-dashboard"
                element={
                    <ProtectedRoute
                        element={<UserDashboard />}
                        userRole={userRole}
                        requiredRole="instructor"
                    />
                }
            />
            <Route
                path="/admin-dashboard"
                element={
                    <ProtectedRoute
                        element={<AdminDashboard />}
                        userRole={userRole}
                        requiredRole="admin"
                    />
                }
            />
        </Routes>
    );
}

export default AppRouter;
