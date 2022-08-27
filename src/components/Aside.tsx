import styles from "./Aside.module.css";
import profile from "../assets/images/profile.webp";
import { useLocation } from "react-router-dom";
import { Contact } from "./Contact";

export function Aside() {
  // if location is /games then show games and hide aside
  const location = useLocation();
  const isGames = location.pathname === "/games-and-visualizations";

  return (
    <aside className={` ${styles.aside} ${isGames ? styles.hidden : ""}`}>
      {/* user placeholder image */}

      <img
        className={`${styles.image}`}
        src={profile}
        alt="Kyle looking at the camera, smiling."
        title="Kyle Beloin"
      />
      <div className={styles["info-contact-container"]}>
        <section id="info" className={`${styles.info}`}>
          <h1>Kyle Beloin</h1>
          <p>Frontend Developer</p>
        </section>
        <Contact />
      </div>
    </aside>
  );
}
