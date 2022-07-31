import { PageOutletContext } from "./Layout";
import styles from "./Home.module.css";
import layout from "../pages/Layout.module.css";
import { Container } from "../components/Container";
import ProjectCards from "../components/Home/ProjectCards";
import Technologies from "../components/Home/Technologies";
import * as data from "../data/home";

export default function Home() {
  const { page, visible } = PageOutletContext();

  // wait for element to load

  return (
    <section className={`${page}`} dir="ltr">
      <div className={styles.scroller}>
        <Container
          className={`${styles.container} ${styles["introduction-container"]}`}
          visible={visible}
        >
          {data.intro.content}
        </Container>
        {/* Home Content */}

        <Technologies visible={true} />

        <Container
          className={`${styles["projects-container"]}`}
          visible={visible}
        >
          <ProjectCards projects={data.projects} />
        </Container>
        <Container
          className={`${layout["bg__color--inverse"]} ${styles.container} ${styles["about-container"]}`}
          visible={visible}
        >
          <div className={`${styles.copy}`}>
            {data.about.title}
            {data.about.content}
          </div>
        </Container>
      </div>
    </section>
  );
}
