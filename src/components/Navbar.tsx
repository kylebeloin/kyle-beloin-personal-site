import { routes } from "../common/routes";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "./Buttons/Button";
import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "../hooks/UseWindowSize";

export const Navbar = () => {
  const location = useLocation();
  const isGames = location.pathname === "/games-and-visualizations";
  const [open, setOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    // play animation in reverse
    if (ref.current && open) {
      const animation = ref.current.getAnimations()[0];
      animation.reverse();

      animation.onfinish = () => {
        if (ref.current) {
          ref.current.classList.remove(styles.open);
        }
        setOpen(!open);
      };
      animation.play();
    } else {
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (windowSize.width > 768 && ref.current) {
      const animation = ref.current.getAnimations()[0];
      if (animation) {
        animation.finish();
      }
      setOpen(false);
    }
  }, [windowSize, open]);

  return (
    <>
      <Button
        className={`${styles.button} ${open ? "" : styles["button-closed"]}`}
        onClick={handleOpen}
        icon={open ? "close" : "menu"}
      />
      <nav
        ref={ref}
        className={`${styles.navbar} ${isGames ? styles.games : ""} ${
          open ? styles.open : ""
        }`}
        style={
          {
            "--route-number": routes.length,
          } as React.CSSProperties
        }
      >
        {routes.map(
          (route) =>
            route.nav && (
              <NavLink
                key={route.key}
                className={({ isActive }) =>
                  `${styles.navlink} ${isActive ? `${styles.active}` : ``}`
                }
                to={route.path}
                onClick={() => setOpen(false)}
              >
                {route.label}
              </NavLink>
            )
        )}
      </nav>
    </>
  );
};
