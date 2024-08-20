import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/routes';
import contextFavList from './context/context';
import { useState } from 'react';
import { LanguageProvider } from './context/languageContext'; 

function App() {
  const [favList, setFavList] = useState([]);

  return (
    <LanguageProvider>
      <contextFavList.Provider value={{ favList, setFavList }}>
        <div>
          <Router />
        </div>
      </contextFavList.Provider>
    </LanguageProvider>
  );
}

export default App;
