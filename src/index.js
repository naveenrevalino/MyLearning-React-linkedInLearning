import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './App';
import {About} from './App';

// BrowserRouter : Is what we will use to navigate through child components.
// Routes : Here we will set up all our paths, that we want to display.
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <App /> }></Route>
    <Route path="/home" element={ <Home /> }></Route>
    <Route path="/about" element={ <About /> }></Route>
  </Routes>
    
  </BrowserRouter>
);