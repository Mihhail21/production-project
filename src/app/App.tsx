import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets';
import { Sidebar } from 'widgets/Sidebar';


function App() {
  const { theme } = useTheme()
 
 
  return (
    <div className={classNames('app', {}, [theme])}>
          <NavBar/>
          <div className='content-page'> 
            <Sidebar/>
            <AppRouter/>
          </div>
    </div>
  )
}

export default App
