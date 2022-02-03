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

            <div className={styles.technologyCopy}>
                <h5>THE TERMINOLOGY...</h5>
                <h3>Launch Vehicle</h3>
                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>



        </section>
    )
}