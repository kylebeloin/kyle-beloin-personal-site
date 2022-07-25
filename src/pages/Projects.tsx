import { PageOutletContext } from "./Layout";
import { Container } from "../components/Container";
import styles from "./Home.module.css";
import layout from "./Layout.module.css";

export default function Projects() {
  const { page, visible } = PageOutletContext();

  return (
    <section className={`${page}`} dir="ltr">
      <div className={`${layout.scroller}`}>
        <Container
          visible={visible}
          className={`${layout.scroller} ${styles["introduction-container"]}`}
        >
          <h1 className={`${styles.copy}`}>Projects</h1>
        </Container>
      </div>
    </section>
  );
}
