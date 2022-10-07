import { PageOutletContext } from "./Layout";
import styles from "./Home.module.css";
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
        <h2>Hello!</h2>
        {data.intro.content}
      </Container>
      {/* Home Content */}

      <Container
        className={`${styles["projects-container"]} ${page}`}
        visible={true}
        id="projects"
      >
        <header>
          <h2 className={styles.header}>Highlighted Projects</h2>
        </header>
        <ProjectCards projects={data.projects} />
        {/* <NavLink to="/projects" className={styles.link}>
          View all projects
        </NavLink> */}
      </Container>
    </>
  );
}
