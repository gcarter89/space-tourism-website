//sort this once we have the useLocation hook in place
import { useLocation, Route, Routes } from 'react-router-dom';
import appStyles from './App.scss';
import styles from './Styles/Main.module.scss'
import { Header } from "./Components/Header";
import { Home } from './Pages/Home';
import { Destination } from './Pages/Destination';
import { Crew } from './Pages/Crew';
import { Technology } from './Pages/Technology';

const data = require('./Assets/shared/data.json');

function App() {

    const location = useLocation();

    let mainClass;

    if (location.pathname === '/') {
        mainClass = 'home'
    }

    if (location.pathname === '/destination') {
        mainClass = 'destination'
    }

    if (location.pathname === '/crew') {
        mainClass = 'crew'
    }

    if (location.pathname === '/technology') {
        mainClass = 'technology'
    }




    return (
        <div className={mainClass}>
            <Header />

            <main className={styles.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="destination" element={<Destination />} />
                <Route path="crew" element={<Crew />} />
                <Route path="technology" element={<Technology />} />

            </Routes>
                
            </main>
                    
        </div>
  );
}

export default App;