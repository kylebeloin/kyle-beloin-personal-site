import { PageOutletContext } from "./Layout";

export default function About() {
  const { page } = PageOutletContext();
  return (
    <section className={`${page}`}>
      <div>
        <h1>About</h1>
      </div>
    </section>
  );
}
