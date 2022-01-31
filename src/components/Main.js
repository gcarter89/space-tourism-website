import styles from '../Styles/Main.module.scss';
import { Home } from "../Pages/Home";

export function Main() {
    return (
        <main className={styles.main}>
            <Home />
        </main>
    )
}