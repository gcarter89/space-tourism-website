import styles from '../Styles/Home.module.scss';

export function Home() {
    return (
        <>
            <section className={styles.homeSection}>
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </section>
            <button className={styles.exploreCircle}>
                <h4>EXPLORE</h4>
            </button>
        </>

    )

}