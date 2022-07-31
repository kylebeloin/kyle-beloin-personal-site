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

      <div className={`${styles.copy}`}>
        <h2>Kyle Beloin</h2>
        <p>Frontend Developer</p>
      </div>
    </aside>
  );
}
