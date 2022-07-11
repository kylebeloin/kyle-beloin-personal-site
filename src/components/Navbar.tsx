import { routes } from "../common/routes";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
