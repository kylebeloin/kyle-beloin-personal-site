import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Navbar } from "./Navbar";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
