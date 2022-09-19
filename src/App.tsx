import { Suspense, useContext, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Counter } from './components/Counter';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


function App() {
  const {theme, toggleTheme} = useTheme()
  const bool = true; 
 
  return (
    <div className={classNames('app', {}, [theme])}>
          <button onClick={toggleTheme}>toggle</button>
          <Link to={'/'}> Главная</Link>
          <Link to={'/about'}> О сайте</Link>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  <Route path={'/about'} element={<AboutPageAsync/>}/>
                  <Route path={'/'} element={<MainPageAsync/>}/>
              </Routes>
        </Suspense>
          <Counter/>
    </div>
  )
}

export default App
