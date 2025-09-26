import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">1t1sCooL</a>.
            </p>
        </footer>
    )
}