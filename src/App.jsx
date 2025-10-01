import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalTypographyStyle } from './styles/typography';
import { GlobalResetStyle } from './styles/reset';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [selectPokemon, setSelectPokemon] = useState(() => {
    const stored = localStorage.getItem('selectPokemon');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectPokemon', JSON.stringify(selectPokemon));
  }, [selectPokemon]);

  return (
    <>
      <Global styles={GlobalTypographyStyle} />
      <Global styles={GlobalResetStyle} />
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route
          path='/main'
          element={
            <MainPage
              selectPokemon={selectPokemon}
              setSelectPokemon={setSelectPokemon}
            />
          }
        />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
