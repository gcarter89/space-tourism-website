//sort this once we have the useLocation hook in place
import styles from './App.scss';
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
  return (
    <div className="home">
        <Header />
        <Main />
    </div>

  );
}

export default App;