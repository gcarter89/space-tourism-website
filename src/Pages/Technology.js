import styles from '../Styles/Technology.module.scss';
import LaunchVehiclePortrait from '../Assets/technology/image-launch-vehicle-portrait.jpg';
import LaunchVehicleLandscape from '../Assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceportPortrait from '../Assets/technology/image-spaceport-portrait.jpg';
import SpaceportLandscape from '../Assets/technology/image-spaceport-landscape.jpg';
import SpaceCapsulePortrait from '../Assets/technology/image-space-capsule-portrait.jpg';
import SpaceCapsuleLandscape from '../Assets/technology/image-space-capsule-landscape.jpg';
import { useState } from 'react';

export function Technology({ data }) {

    const [isActive, setIsActive] = useState(0);
    const [images, setImages] = useState([LaunchVehiclePortrait, LaunchVehicleLandscape]);
    const [selectedTechnology, setSelectedTechnology] = useState(data[0]);

    function handleClick(event, index) {
        event.preventDefault();
        setIsActive(index);
        setSelectedTechnology(data[index]);
        
        switch(data[index].name) {
            case 'Launch vehicle':
                setImages([LaunchVehiclePortrait, LaunchVehicleLandscape])  
                break;
            case 'Spaceport':
                setImages([SpaceportPortrait, SpaceportLandscape])  
                break;
            case 'Space capsule':
                setImages([SpaceCapsulePortrait, SpaceCapsuleLandscape])
                break;
            default:
                break;
        }

    }

    return (
        <section className={styles.technologySection}>
            <h5 className={styles.heading}><span>03</span>Space Launch 101</h5>

            <div className={styles.imageContainer}>
                <picture>
                    <source srcSet={images[1]} media="(max-width: 768px)"/>
                    <img src={images[0]} alt="space technology" />
                </picture>
            </div>

            <div className={styles.technologySelect}>
                {data.map((technology, index) => {
                    return (
                        <button key={index} className={(isActive === index) ? `${styles.selectButton} ${styles.active}` : styles.selectButton } onClick={(e) => handleClick(e, index)}><h4>{index + 1}</h4></button>
                    )
                })}
            </div>

            <div className={styles.technologyCopy}>
                <h5>THE TERMINOLOGY...</h5>
                <h3>{selectedTechnology.name}</h3>
                <p>{selectedTechnology.description}</p>
            </div>



        </section>
    )
}