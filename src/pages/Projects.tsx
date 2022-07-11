import layout from "../pages/Layout.module.css";
import { PageOutletContext } from "./Layout";

export default function Projects() {
  const { page } = PageOutletContext();
  return (
    <section className={`${page}`}>
      <div>
        <h1 className={layout.copy}>Projects</h1>
      </div>
    </section>
  );
}
