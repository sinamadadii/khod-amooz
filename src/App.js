import React from 'react';
import KhodAmooz from './KhodAmooz';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <KhodAmooz />
        </BrowserRouter>
    );
}

export default App;