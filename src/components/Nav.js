import styles from '../Styles/Nav.module.scss'
import logo from '../Assets/shared/logo.svg';
import hamburgerOpen from '../Assets/shared/icon-hamburger.svg';
import hamburgerClosed from '../Assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom';


//links to be done when routing is complete

export function Nav() {
    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src={logo} alt="Space Tourism Logo" />
            <span className={styles.line}></span>
            <div className={styles.navMenu}>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="/"><span>00</span>HOME</NavLink>
                
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="destination"><span>01</span>DESTINATION</NavLink>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="crew"><span>02</span>CREW</NavLink>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="technology"><span>03</span>TECHNOLOGY</NavLink>
            </div>
            <button className={styles.navButton}>
                <img className={styles.hamburgerOpen} src={hamburgerOpen} alt="Hamburger icon" />
                <img className={styles.hamburgerClosed} src={hamburgerClosed} alt="Closed icon" />
            </button>
        </nav>
    )
    
}