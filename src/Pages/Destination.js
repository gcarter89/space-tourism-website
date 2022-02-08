import styles from '../Styles/Destination.module.scss';
import Moon from '../Assets/destination/image-moon.webp';

export function Destination() {



    return (
        <section className={styles.destinationSection}>

            <div className={styles.headingPlanet}>
                <h5 className={styles.heading}><span>01</span>PICK YOUR DESTINATION</h5>
                <img className={styles.planet} src={Moon} alt='planet or satellite' />
            </div>



            <div className={styles.menuCopyStatGroup}>

                <div className={styles.menuSelection}>
                    <ul>
                        <li><button className={styles.active}>Moon</button></li>
                        <li><button>Mars</button></li>
                        <li><button>Europa</button></li>
                        <li><button>Titan</button></li>
                    </ul>
                </div>

                <div className={styles.destinationCopy}>
                    <h1>Moon</h1>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>

                <div className={styles.destinationStats}>
                    <div className={styles.stat}>
                        <h5>AVG. DISTANCE</h5>
                        <h4>384,000 KM</h4>
                    </div>

                    <div className={styles.stat}>
                        <h5>EST. TRAVEL TIME</h5>
                        <h4>3 DAYS</h4>
                    </div>
                </div> 
            </div>    

        </section>
    )
}