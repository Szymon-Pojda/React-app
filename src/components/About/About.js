import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.subtitle}>Lorem ipsum.</p>
        </div>
    )
}

export default About;