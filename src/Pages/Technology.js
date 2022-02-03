import styles from '../Styles/Technology.module.scss';
import launchVehiclePortrait from '../Assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../Assets/technology/image-launch-vehicle-landscape.jpg';

export function Technology() {
    return (
        <section>
            <h5 className={styles.heading}><span>03</span>Space Launch 101</h5>

            <div className={styles.imageContainer}>
                <picture>
                    <source srcSet={launchVehicleLandscape} media="(max-width: 768px)"/>
                    <img src={launchVehiclePortrait} alt="space technology" />
                </picture>
            </div>

            <div className={styles.technologySelect}>
                <button className={styles.selectButton}><h4>1</h4></button>
                <button className={styles.selectButton}><h4>2</h4></button>
                <button className={styles.selectButton}><h4>3</h4></button>
            </div>

            <div>

            </div>



        </section>
    )
}