import styles from "./Technologies.module.css";
import layout from "../../pages/Layout.module.css";
import { Container } from "../Container";
// import icons from "../../common/icons";

// const technologies = [
//   "react",
//   "typescript",
//   "javascript",
//   "redux",
//   "python",
//   "django",
// ];

export default function Technologies({ visible }) {
  return (
    <Container
      className={`${layout["bg__color--inverse"]} ${styles["technologies-container"]} ${styles.technologies}`}
      visible={visible}
    >
      <h2>Projects</h2>
      {/* {technologies.map((tech, index) => (
        <div key={`tech-list-${tech}`} title={tech}>
          {icons(tech)}
        </div>
      ))} */}
    </Container>
  );
}
