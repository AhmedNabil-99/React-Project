import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/routes';
import contextFavList from './context/context';
import { useState } from 'react';
function App() {
  const [favList, setFavList] = useState([])

  return (
    <contextFavList.Provider value={{favList, setFavList}}>
      <div>
        <Router />
      </div>
    </contextFavList.Provider>
  );
}

export default App;
