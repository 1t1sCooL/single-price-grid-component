import styles from './Footing.module.css'
import {PriceBox} from "../priceBox/PriceBox.tsx";
import {WhyUsBox} from "../whyUs/WhyUsBox.tsx";

export const Footing = () => {
    return (
        <div className={styles.footing}>
            <PriceBox/>
            <WhyUsBox/>
        </div>
    )
}