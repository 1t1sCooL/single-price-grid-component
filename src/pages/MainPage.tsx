import styles from "./MainPage.module.css";
import {Heading} from "../widgets/heading/Heading.tsx";
import {Footing} from "../widgets/footing/Footing.tsx";

export const MainPage = () => {
    return (
        <section className={styles.container}>
            <Heading/>
            <Footing/>
        </section>
    )
}