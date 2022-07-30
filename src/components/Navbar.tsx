import { routes } from "../common/routes";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "./Buttons/Button";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const isGames = location.pathname === "/games";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        icon={isOpen ? "close" : "menu"}
      />
      <nav
        className={`${styles.navbar} ${isGames ? styles.games : ""} ${
          isOpen ? styles.open : ""
        }`}
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
    </>
  );
};
