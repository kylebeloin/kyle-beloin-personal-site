import { PageOutletContext } from "./Layout";
import styles from "./Home.module.css";
import layout from "../pages/Layout.module.css";
import { Container } from "../components/Container";
import ProjectCards from "../components/Home/ProjectCards";
import Technologies from "../components/Home/Technologies";

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
          <p>
            Currently a UI developer for Deckers Brands' ecommerce division.
          </p>
        </Container>
        {/* Home Content */}

        <Technologies visible={true} />

        <Container
          className={`${styles["projects-container"]}`}
          visible={visible}
          style={
            {
              overflowX: "auto",
              overflowY: "hidden",
            } as React.CSSProperties
          }
        >
          <ProjectCards />
        </Container>
        <Container
          className={`${layout["bg__color--inverse"]} ${styles.container} ${styles["about-container"]}`}
          visible={visible}
        >
          <div className={`${styles.copy}`}>
            <h2>About</h2>
            <p>
              While primarily working in the frontend, I'm constantly seeking
              out ways to explore other aspects in the tech industry, including:
              data science, game development, and more.
              <br />
              <br />
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
