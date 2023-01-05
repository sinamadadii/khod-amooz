import React from 'react';
import KhodAmooz from './KhodAmooz';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <KhodAmooz />
        </BrowserRouter>
    );
}

export default App;