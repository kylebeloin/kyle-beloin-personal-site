import styles from "./Aside.module.css";
import profile from "../assets/images/profile.jpeg";
import { useLocation } from "react-router-dom";

export function Aside() {
  // if location is /games then show games and hide aside
  const location = useLocation();
  const isGames = location.pathname === "/games";

  return (
    <aside className={` ${styles.aside} ${isGames ? styles.hidden : ""}`}>
      {/* user placeholder image */}

      <img className={`${styles.image}`} src={profile} alt="user" />

      <section id="info" className={`${styles.info}`}>
        <h1>Kyle Beloin</h1>
        <p>Frontend Developer</p>
      </section>
    </aside>
  );
}
