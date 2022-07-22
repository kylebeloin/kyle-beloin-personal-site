import { PageOutletContext } from "./Layout";
import styles from "./Home.module.css";
import layout from "../pages/Layout.module.css";
import { Container } from "../components/Container";
import ProjectCards from "../components/Home/ProjectCards";
import { Aside } from "../components/Aside";
import Technologies from "../components/Home/Technologies";

export default function Home() {
  const { page, visible } = PageOutletContext();

  // wait for element to load

  return (
    <section className={`${page}`} dir="ltr">
      <Aside />

      <div className={styles.scroller}>
        <Container className={styles.container} visible={visible}>
          <p>I'm a Frontend Developer with a passion for building beautiful,</p>
        </Container>
        {/* Home Content */}

        <Technologies />

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
          className={`${layout["bg__color--inverse"]} ${styles.container}`}
          visible={visible}
        >
          <div className={`${styles.copy}`}>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              debitis atque vitae excepturi molestiae eum nemo fuga ab a rem quo
              exercitationem labore quam, obcaecati porro repellat, laboriosam
              omnis voluptate enim? Iure, nostrum porro reprehenderit sunt
              explicabo beatae magni disti.
              <br />
              <br />
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              debitis atque vitae excepturi molestiae eum nemo fuga ab a rem quo
              exercitationem labore quam, obcaecati porro repellat
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
