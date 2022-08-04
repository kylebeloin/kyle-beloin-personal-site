import { PageOutletContext } from "./Layout";
import styles from "./Home.module.css";
import layout from "../pages/Layout.module.css";
import { Container } from "../components/Container";
import ProjectCards from "../components/Home/ProjectCards";
import * as data from "../data/home";

export default function Home() {
  const { page, visible } = PageOutletContext();

  // wait for element to load

  return (
    <>
      <Container
        className={`${styles["introduction-container"]} ${page}`}
        visible={visible}
        id="about"
      >
        <h2>About</h2>
        {data.intro.content}
      </Container>
      {/* Home Content */}

      <Container
        className={`${styles["projects-container"]} ${page}`}
        visible={visible}
        id="projects"
      >
        <h2 className={styles.header}>Projects</h2>
        <ProjectCards projects={data.projects} />
      </Container>
      <Container
        className={`${layout["bg__color--inverse"]} ${styles.container} ${styles["about-container"]} ${page}`}
        visible={visible}
      >
        <div className={`${styles.copy}`}>
          {data.about.title}
          {data.about.content}
        </div>
      </Container>
    </>
  );
}
