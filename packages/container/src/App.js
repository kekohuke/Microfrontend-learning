import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
<<<<<<< HEAD
        <div>
            <h1>Hi there! I am container~~</h1>
            <hr />
            <MarketingApp />
        </div>
=======
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
>>>>>>> master
    );
};
