export const intro = {
  title: "Introduction",
  description: "intro",
  content: (
    <p>
      Current frontend developer at{" "}
      <a
        style={{ color: "var(--font-color)" }}
        href={"https://www.deckers.com/"}
        target={"_blank"}
        rel="noreferrer"
      >
        Deckers Brands
      </a>
      , with a degree in Applied Computing and Informatics from the University
      of Arizona (Fall 2022).
      <br />
      <br />
      Tech transplant from Philosophy (BA, 2013) and English Literature (MA,
      2018) backgrounds.
    </p>
  ),
};

export const projects = [
  {
    title: "Learning Platform",
    content: (
      <p>
        A learning management system that allows teachers to create courses and
        assign them to students. The system can also be used to administer data
        collection and analysis.
      </p>
    ),
    image: "https://picsum.photos/id/1/200/300",
    link: "https://experiment-builder-demo.herokuapp.com/",
    tech: ["react", "redux", "python", "django"],
  },
  {
    title: "Game and Visual Design",
    content: (
      <p>
        A few examples of games and a visualization following similar design
        direction. All elements are custom built in React (projects are ongoing
        - check back for something new!).
      </p>
    ),
    image: "https://picsum.photos/id/2/200/300",
    link: "/games",
    code: "https://www.google.com",
    tech: ["react", "javascript"],
  },
  {
    title: "Personal Websites ",
    content: (
      <p>
        I've created a few personal websites and portfolios, including this one.
      </p>
    ),
    image: "https://picsum.photos/id/2/200/300",
    link: "/",
    tech: ["react", "typescript", "javascript"],
  },
];

export const about = {
  title: <h2>About</h2>,
  description: "about",
  content: (
    <p>
      While primarily working in the frontend, I'm constantly seeking out ways
      to explore other aspects in the tech industry, including: data science,
      game development, and more.
      <br />
      <br />
    </p>
  ),
};
