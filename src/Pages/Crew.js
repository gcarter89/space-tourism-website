import DouglasHurleyImage from '../Assets/crew/image-douglas-hurley.webp';
import styles from '../Styles/Crew.module.scss';

export function Crew() {
    return (
        <section>
            <h5 className={styles.heading}><span>02</span>Meet your crew</h5>
            <div className={styles.crewImageContainer}>
                <img className={styles.crewImage} src={DouglasHurleyImage} alt="crew member"></img>
            </div>
            


            <div className={styles.crewSelector}>
                <button className={styles.crewSelectorPoint}></button>
                <button className={styles.crewSelectorPoint}></button>
                <button className={styles.crewSelectorPoint}></button>
                <button className={styles.crewSelectorPoint}></button>
            </div>

            <div className={styles.crewCopy}>
                <h4>COMMANDER</h4>
                <h3>DOUGLAS HURLEY</h3>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>

        </section>
    )
}