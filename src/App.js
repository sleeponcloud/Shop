import './App.css';
import { routingFeautre } from './features.js';
import { BrowserRouter as Router,useRoutes } from 'react-router-dom';
import React, { useEffect, Suspense, useState } from 'react';

function App() {
    const routingElement = useRoutes(routingFeautre);
    return (
        <Suspense>
            <div className="App">
                {routingElement}
            </div>
        </Suspense>

    );
}

export default App;
