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

  const location = useLocation();
  const isGames = location.pathname === "/games";

  return (
    <div className={`${styles.layout}`}>
      <header
        className={styles.header}
        style={
          {
            boxShadow: isGames
              ? "none"
              : "var(--box-shadow-left-offset) 0px 10px rgba(0, 0, 0, 0.5)",
          } as React.CSSProperties
        }
      >
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
