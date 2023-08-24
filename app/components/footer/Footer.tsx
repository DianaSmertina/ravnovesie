import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className={styles.socials}></div>
                <div className={styles.info}></div>
            </div>
        </footer>
    );
}