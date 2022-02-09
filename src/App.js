//sort this once we have the useLocation hook in place
import { useLocation, Route, Routes } from 'react-router-dom';
import appStyles from './App.scss';
import styles from './Styles/Main.module.scss'
import { Header } from "./Components/Header";
import { Home } from './Pages/Home';
import { Destination } from './Pages/Destination';
import { Crew } from './Pages/Crew';
import { Technology } from './Pages/Technology';
import { useEffect, useState } from 'react';

const data = require('./Assets/shared/data.json');

function App() {

    const location = useLocation();

    const [mainClass, setMainClass] = useState('');

    const [mainStyle, setMainStyle] = useState(styles.main);

    useEffect(() => {
        if (location.pathname === '/') {
            setMainClass('home')
            setMainStyle(styles.main);
        }
    
        if (location.pathname === '/destination') {
            setMainClass('destination')
            setMainStyle(styles.mainDestination);
        }
    
        if (location.pathname === '/crew') {
            setMainClass('crew')
            setMainStyle(styles.mainCrew);
        }
    
        if (location.pathname === '/technology') {
            setMainClass('technology')
            setMainStyle(styles.mainTechnology);
        }
    }, [location.pathname])


    return (
        <div className={mainClass}>
            <Header />

            <main className={mainStyle}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="destination" element={<Destination data={data.destinations}  />} />
                <Route path="crew" element={<Crew />} />
                <Route path="technology" element={<Technology />} />

            </Routes>
                
            </main>
                    
        </div>
  );
}

export default App;