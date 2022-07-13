import { PageOutletContext } from "./Layout";
import { Container } from "../components/Container";
import styles from "./Home.module.css";

export default function About() {
  const { page, visible } = PageOutletContext();

  return (
    <section className={`${page}`} dir="ltr">
      <div className="scroller">
        <Container visible={visible}>
          <h1 className={`${styles.copy}`}>About</h1>
        </Container>
      </div>
    </section>
  );
}
