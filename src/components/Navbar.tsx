import { routes } from "../common/routes";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const location = useLocation();
  const isGames = location.pathname === "/games";

  return (
    <nav
      className={`${styles.navbar} ${isGames ? styles.games : ""}`}
      style={
        {
          "--route-number": routes.length,
        } as React.CSSProperties
      }
    >
      {routes.map((route) => (
        <NavLink
          key={route.key}
          className={({ isActive }) =>
            `${styles.navlink} ${isActive ? `${styles.active}` : ``}`
          }
          to={route.path}
        >
          {route.key}
        </NavLink>
      ))}
    </nav>
  );
};
