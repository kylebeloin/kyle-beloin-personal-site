import styles from "./Aside.module.css";
import profile from "../assets/images/profile.jpeg";

export function Aside() {
  return (
    <aside className={` ${styles.aside}`}>
      <h2 className={styles.greeting}>hello</h2>
      {/* user placeholder image */}
      <img className={`${styles.image}`} src={profile} alt="user" />

      <div className={`${styles.copy}`}>
        <h2>Kyle Beloin</h2>
        <p>UI Developer / Data Analyst / Bad Pun Lover</p>
      </div>
    </aside>
  );
}
