import styles from "./MainPage.module.css";
import {Heading} from "./Heading.tsx";
import {Footing} from "./Footing.tsx";

export const MainPage = () => {
    return (
        <section className={styles.container}>
            <Heading/>
            <Footing/>
        </section>
    )
}