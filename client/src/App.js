import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from './components/Home/Home';
import Uni from './components/Uni/Uni';
import history from './history';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Uni/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;