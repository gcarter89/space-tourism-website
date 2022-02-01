import styles from '../Styles/Nav.module.scss'
import logo from '../Assets/shared/logo.svg';
import hamburgerOpen from '../Assets/shared/icon-hamburger.svg';
import hamburgerClosed from '../Assets/shared/icon-close.svg'

//links to be done when routing is complete

export function Nav() {
    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src={logo} alt="Space Tourism Logo" />
            <span className={styles.line}></span>
            <div className={styles.navMenu}>
                <a><span>00</span>HOME</a>
                <a><span>01</span>DESTINATION</a>
                <a><span>02</span>CREW</a>
                <a><span>03</span>TECHNOLOGY</a>
            </div>
            <button className={styles.navButton}>
                <img className={styles.hamburgerOpen} src={hamburgerOpen} alt="Hamburger icon" />
                <img className={styles.hamburgerClosed} src={hamburgerClosed} alt="Closed icon" />
            </button>
        </nav>
    )
    
}