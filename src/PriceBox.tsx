import styles from "./PriceBox.module.css";

export const PriceBox = () =>{
    return (
        <section className={styles.priceBox}>
            <h2>Monthly Subscription</h2>

            <p className={styles.price}>
                <span>$29</span> per month
            </p>
            <p className={styles.subscribe}>
                Full access for less than $1 a day
            </p>
            <button className={styles.btn}>
                Sign Up
            </button>
        </section>
    )
}