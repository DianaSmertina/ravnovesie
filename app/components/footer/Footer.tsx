import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
    const addSocials = () => {
        const socials = ["telegram", "vk", "youtube"];
        return socials.map((el) => (
            <a key={el}>
                <Image
                    src={`/${el}.png`}
                    alt={`${el} logo`}
                    width="48"
                    height="48"
                />
            </a>
        ));
    };

    return (
        <footer>
            <div className={"wrapper flex-column " + styles.wrapper}>
                <div className={"flex-row " + styles.socials}>
                    {addSocials()}
                </div>
                <div className={"flex-column " + styles.info}>
                    <div className={"flex-column " + styles.contacts}>
                        <a
                            href="mailto:info@fond-ravnovesie.ru"
                            className="flex-row"
                        >
                            <Image
                                src={"/mail.png"}
                                alt={"e-mail"}
                                width="20"
                                height="17"
                                className={styles.contact_icon}
                            />
                            <p className={styles.contact_text}>
                                info@fond-ravnovesie.ru
                            </p>
                        </a>
                        <a href="tel:+79313634616" className="flex-row">
                            <Image
                                src={"/tel.png"}
                                alt={"telephone"}
                                width="20"
                                height="20"
                                className={styles.contact_icon}
                            />
                            <p className={styles.contact_text}>
                                8 (931) 363-46-16
                            </p>
                        </a>
                    </div>
                    <div className="flex-column">© CC BY-NC-SA Благотворительный фонд “РАВНОВЕСИЕ”</div>
                    <div className="flex-column">
                        <p>Политика конфиденциальности</p>
                        <p>Оферта</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
