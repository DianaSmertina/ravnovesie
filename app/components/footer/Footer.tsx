import Image from "next/image";
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer>
            <div className={"wrapper flex-column " + styles.wrapper}>
                <div className={"flex-row " + styles.socials}>
                <Image
                    src="/telegram.png"
                    alt="telegram logo"
                    width="48"
                    height="48"
                />
                <Image
                    src="/vk.png"
                    alt="vk logo"
                    width="48"
                    height="48"
                />
                <Image
                    src="/youtube.png"
                    alt="youtube logo"
                    width="48"
                    height="48"
                />
                </div>
                <div className={styles.info}></div>
            </div>
        </footer>
    );
}