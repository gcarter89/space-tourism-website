import DouglasHurleyImage from '../Assets/crew/image-douglas-hurley.webp';
import AnoushehAnsariImage from '../Assets/crew/image-anousheh-ansari.webp';
import MarkShuttleworthImage from '../Assets/crew/image-mark-shuttleworth.webp';
import VictorGloverImage from '../Assets/crew/image-victor-glover.webp';
import styles from '../Styles/Crew.module.scss';
import { useState } from 'react';

export function Crew({ data }) {
    const [selectedCrewMember, setSelectedCrewMember] = useState(data[0]);

    const [image, setImage] = useState(DouglasHurleyImage);

    const [isActive, setIsActive] = useState(0);

    function handleClick(event, index) {
        event.preventDefault();
        setSelectedCrewMember(data[index]);
        setIsActive(index);

        switch (index) {
            case 0:
                setImage(DouglasHurleyImage);
                break;
            case 1:
                setImage(MarkShuttleworthImage);
                break;
            case 2:
                setImage(VictorGloverImage);
                break;
            case 3:
                setImage(AnoushehAnsariImage);
                break;
        
            default:
                break;
        }
    }



    return (
        <section className={styles.crewSection}>
            <h5 className={styles.heading}><span>02</span>Meet your crew</h5>
            <div className={styles.crewImageContainer}>
                <img className={styles.crewImage} src={image} alt="crew member"></img>
            </div>
            

        <div className={styles.crewSelectorCopyGroup}>
            <div className={styles.crewSelector}>
                {data.map((crewMember, index) => {
                    return (
                        <button key={index} className={(index === isActive) ? `${styles.crewSelectorPoint} ${styles.active}` : styles.crewSelectorPoint} onClick={(e) => handleClick(e, index)}></button>
                    )
                })}
            </div>

                <div className={styles.crewCopy}>
                    <h4>{selectedCrewMember.role}</h4>
                    <h3>{selectedCrewMember.name}</h3>
                    <p>{selectedCrewMember.bio}</p>
                </div>
        </div>


        </section>
    )
}