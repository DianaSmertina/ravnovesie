import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header>
            <div className={"wrapper flex-row " + styles.wrapper}>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width="160"
                    height="90"
                    className={styles.logo}
                />
                <nav className={"flex-row " + styles.navigation}>
                    <Link href="/">Главная</Link>
                    <Link href="/">Отчеты</Link>
                    <Link href="/">Проекты</Link>
                    <Link href="/">Сообщество</Link>
                    <Link href="/">Контакты</Link>
                </nav>
                <div className={"flex-row " + styles.info}>
                    <div>8 (931) 363-46-16</div>
                    <Image
                        src="/hamburger.png"
                        alt="menu"
                        width="16"
                        height="10"
                        className={styles.hamburger}
                    />
                </div>
            </div>
        </header>
    );
}
