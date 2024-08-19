import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar/nav';
import Router from './routes/routes';
import Welcom from './components/welcoming/welcom';
import Cards from './components/cards/cards';

function App() {
  return (
      <div>
        <Nav />
        <Router />
      </div>
  );
}

export default App;
