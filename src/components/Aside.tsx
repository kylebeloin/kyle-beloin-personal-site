import styles from "./Aside.module.css";
import layout from "../pages/Layout.module.css";

export function Aside() {
  return (
    <aside className={` ${styles.aside}`}>
      <h1>Aside</h1>
    </aside>
  );
}
