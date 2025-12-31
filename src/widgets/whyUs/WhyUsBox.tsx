import styles from "./WhyUsBox.module.css";

export const WhyUsBox = () => {
  return (
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
  );
};
