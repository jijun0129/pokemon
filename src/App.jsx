import IntroPage from './Pages/IntroPage';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalTypographyStyle } from './styles/typography';
import { GlobalResetStyle } from './styles/reset';
import './App.css';

function App() {
  return (
    <>
      <Global styles={GlobalTypographyStyle} />
      <Global styles={GlobalResetStyle} />
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/Main' element={<MainPage />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
