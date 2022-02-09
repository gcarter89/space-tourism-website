import styles from '../Styles/Destination.module.scss';
import MoonImage from '../Assets/destination/image-moon.webp';
import MarsImage from '../Assets/destination/image-mars.webp';
import EuropaImage from '../Assets/destination/image-europa.webp';
import TitanImage from '../Assets/destination/image-titan.webp';
import { useState } from 'react';

export function Destination({ data }) {
    const [selectedPlanet, setSelectedPlanet] = useState(data[0]);
    const [image, setImage] = useState(MoonImage);
    const [isActive, setIsActive] = useState(0);
    
    function handleClick(event, index) {
        event.preventDefault();
        setSelectedPlanet(data[index]);
        setIsActive(index);

        switch(data[index].name) {
            case 'Moon':
                setImage(MoonImage);
                break;
            case 'Mars':
                setImage(MarsImage);
                break;
            case 'Europa':
                setImage(EuropaImage);
                break;
            case 'Titan':
                setImage(TitanImage);
                break;
            default:
                break;
        }
    }


    return (
        <section className={styles.destinationSection}>

            <div className={styles.headingPlanet}>
                <h5 className={styles.heading}><span>01</span>PICK YOUR DESTINATION</h5>
                <img className={styles.planet} src={image} alt='planet or satellite' />
            </div>



            <div className={styles.menuCopyStatGroup}>

                <div className={styles.menuSelection}>
                    <ul>
                        {data.map((planet, index) => {
                            return (
                                <li key={index}>
                                    <button className={(index === isActive) ? styles.active : null} onClick={(e) => handleClick(e, index)}>{planet.name}</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className={styles.destinationCopy}>
                    <h1>{selectedPlanet.name}</h1>
                    <p>{selectedPlanet.description}</p>
                </div>

                <div className={styles.destinationStats}>
                    <div className={styles.stat}>
                        <h5>AVG. DISTANCE</h5>
                        <h4>{selectedPlanet.distance}</h4>
                    </div>

                    <div className={styles.stat}>
                        <h5>EST. TRAVEL TIME</h5>
                        <h4>{selectedPlanet.travel}</h4>
                    </div>
                </div> 
            </div>    

        </section>
    )
}