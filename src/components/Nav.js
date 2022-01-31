import styles from '../Styles/Nav.module.scss'
import logo from '../Assets/shared/logo.svg';
import hamburgerOpen from '../Assets/shared/icon-hamburger.svg';
import hamburgerClosed from '../Assets/shared/icon-close.svg'


export function Nav() {
    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src={logo} alt="Space Tourism Logo" />
            <button className={styles.navButton}>
                <img className={styles.hamburgerOpen} src={hamburgerOpen} alt="Hamburger icon" />
                <img className={styles.hamburgerClosed} src={hamburgerClosed} alt="Closed icon" />
            </button>
        </nav>
    )
    
}