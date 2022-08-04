import { Outlet, useOutletContext, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { Navbar } from "../components/Navbar";
import { PageContext } from "../common/types";
import { useLayout } from "../hooks/UseLayout";
import { Aside } from "../components/Aside";
import { useEffect } from "react";

export function PageOutletContext() {
  const outlet = useOutletContext<PageContext>();
  return outlet;
}

export default function Layout() {
  // Get values from useLayout hook
  const { thresholds, delta, trajectory, ref, visible } = useLayout();

  const location = useLocation();

  useEffect(() => {
    console.log(`Layout: ${location.pathname}`);
  }, [location.pathname]);

  return (
    <div className={`${styles.layout}`}>
      <nav className={styles.header}>
        <Navbar />
      </nav>
      <main key="main" className={`${styles.main} `} ref={ref}>
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
