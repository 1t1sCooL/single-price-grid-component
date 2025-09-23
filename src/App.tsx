import styles from './App.module.css'

function App() {


  return (
    <><section className={styles.container}>
        <section className={styles.heading}>
            <h1>Join our community</h1>
            <h2>30-day, hassle-free money back guarantee</h2>
            <p className={styles.description}>
                Gain access to our full library of tutorials along with expert code reviews.
                Perfect for any developers who are serious about honing their skills.
            </p>
        </section>
        <div className={styles.footing}>
            <section className={styles.priceBox}>
                <h2>Monthly Subscription</h2>

                <p className={styles.price}>
                    <span>$29</span> per month
                </p>
                <p className={styles.subsribe}>
                    Full access for less than $1 a day
                </p>
                <button className={styles.btn}>
                    Sign Up
                </button>
            </section>
            <section className={styles.WhyUsBox}>
                <h2>Why Us</h2>
                <ul className={styles.list}>
                    <li>Tutorials by industry experts</li>
                    <li>Peer & expert code review</li>
                    <li>Coding exercises</li>
                    <li>Access to our GitHub repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
            </section>
        </div>

    </section>
        <footer className={styles.footer}>
            <p>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </p>
        </footer>
    </>
  )
}

export default App
