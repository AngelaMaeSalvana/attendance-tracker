import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

function App() {
    const [userRole, setUserRole] = useState(null); // Default role

    return (
        <BrowserRouter>
            <div className="App">
                <AppRouter userRole={userRole} setUserRole={setUserRole} />
            </div>
        </BrowserRouter>
    );
}

export default App;
