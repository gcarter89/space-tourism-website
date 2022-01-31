import logo from '../Assets/shared/logo.svg';
import hamburgerOpen from '../Assets/shared/icon-hamburger.svg';
import hamburgerClosed from '../Assets/shared/icon-close.svg'


export function Nav() {
    return (
        <nav>
            <img id="logo" src={logo} alt="Space Tourism Logo" />
            <button className="nav-menu-button">
                <img id="hamburger-open" src={hamburgerOpen} alt="Hamburger icon" />
                <img id="hamburger-closed" src={hamburgerClosed} alt="Closed icon" />
            </button>
            
            
        </nav>
    )
    
}