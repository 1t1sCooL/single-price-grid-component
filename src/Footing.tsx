import styles from './Footing.module.css'
import {PriceBox} from "./PriceBox.tsx";
import {WhyUsBox} from "./WhyUsBox.tsx";

export const Footing = () => {
    return (
        <div className={styles.footing}>
            <PriceBox/>
            <WhyUsBox/>
        </div>
    )
}