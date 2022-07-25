import { Outlet, useOutletContext, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { Navbar } from "../components/Navbar";
import { PageContext } from "../common/types";
import { UseLayout } from "../components/UseLayout";
import { Aside } from "../components/Aside";

export function PageOutletContext() {
  const outlet = useOutletContext<PageContext>();
  return outlet;
}

export default function Layout() {
  // Get values from useLayout hook
  const { thresholds, delta, trajectory, ref, visible } = UseLayout();

  return (
    <div className={`${styles.layout}`}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main key="main" className={`${styles.main}`} ref={ref}>
        <Aside />
        <Outlet
          context={{
            page: `${styles.page}`,
            delta: `${delta}`,
            scroll: `${trajectory}`,
            thresholds: thresholds,
            visible: visible,
          }}
        />
      </main>
    </div>
  );
}
