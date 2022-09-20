import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets';


function App() {
  const {theme, toggleTheme} = useTheme()
 
 
  return (
    <div className={classNames('app', {}, [theme])}>
          <NavBar/>
         <AppRouter/>
          <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

export default App
