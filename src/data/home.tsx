export const intro = {
  title: "Introduction",
  description: "intro",
  content: (
    <>
      <p>Thank you for visiting my website.</p>
      <p>
        Currently, I'm a frontend developer at{" "}
        <a
          style={{ color: "var(--font-color)" }}
          href={"https://www.deckers.com/"}
          target={"_blank"}
          rel="noreferrer"
        >
          Deckers Brands
        </a>
        , with a degree in Applied Computing and Informatics from the University
        of Arizona (Fall 2021). As a tech transplant with backgrounds in
        Philosophy (BA, 2013) and English Literature (MA, 2018), I love
        learning&mdash;plain and simple; but web development ultimately stole my
        heart.
      </p>
    </>
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
    link: "https://experiment-builder-demo.herokuapp.com/",
    tech: ["react", "redux", "python", "django"],
  },
  {
    title: "Game and Visual Design",
    content: (
      <p>
        A set of interactive apps that follow a similar design direction. I
        treat each project as an opportunity to practice using a particular
        js/css feature.
      </p>
    ),
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
    link: "/",
    tech: ["react", "typescript", "javascript"],
  },
];

export const about = {
  title: <h2>About</h2>,
  description: "about",
  content: (
    <p>
      Currently, I'm a frontend developer at{" "}
      <a
        style={{ color: "var(--font-color)" }}
        href={"https://www.deckers.com/"}
        target={"_blank"}
        rel="noreferrer"
      >
        Deckers Brands
      </a>
      , with a degree in Applied Computing and Informatics from the University
      of Arizona (Fall 2021).
      <br />
      <br />
      As a tech transplant with backgrounds in Philosophy (BA, 2013) and English
      Literature (MA, 2018), I love learning&mdash;plain and simple. This
      industry (and frontend development in particular) has proven to be the
      ideal field to help scratch that "lifelong student" itch.
    </p>
  ),
};
