import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

function App() {
    // Initialize userRole from localStorage
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));

    useEffect(() => {
        // Whenever userRole changes, save it to localStorage
        if (userRole) {
            localStorage.setItem('userRole', userRole);
        }
    }, [userRole]);

    return (
        <BrowserRouter>
            <div className="App">
                <AppRouter userRole={userRole} setUserRole={setUserRole} />
            </div>
        </BrowserRouter>
    );
}

export default App;
