export const intro = {
  title: "Introduction",
  description: "intro",
  content: (
    <>
      <p>
        Software developer with a degree in Applied Computing and Informatics
        from the University of Arizona (Fall 2021). As a tech transplant with
        backgrounds in Philosophy (BA, 2013) and English Literature (MA, 2018),
        I love learning&mdash;plain and simple; but web development ultimately
        stole my heart.
      </p>
    </>
  ),
};

export const projects = [
  {
    title: "Spoken Corpus Search Tool",
    content: (
      <p>
        Tool that provides a searchable spoken corpus and real-time interactive
        audio playback of the context surrounding a searched token.
      </p>
    ),
    link: "https://tesol-ddl.herokuapp.com/",
    tech: ["react", "python", "django"],
  },
  {
    title: "Learning Platform / Experiment Builder",
    content: (
      <p>
        A learning management system that allows teachers to create courses and
        assign them to students. The system can also be used to administer data
        collection and analysis. While I do not have a live demo, you can view
        the code on Github.
      </p>
    ),
    link: "https://github.com/kylebeloin/experiment-builder-demo",
    tech: ["react", "redux", "python", "django"],
  },
  {
    title: "Game and Visualizations",
    content: (
      <p>
        A set of interactive apps that follow a similar design direction. I
        treat each project as an opportunity to practice using a particular
        js/css feature. Read more about each project by following this link.
      </p>
    ),
    link: "/games-and-visualizations",
    code: "https://www.google.com",
    tech: ["react", "javascript", "svelte"],
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
      Currently, I'm a software developer with a degree in Applied Computing and
      Informatics from the University of Arizona (Fall 2021).
      <br />
      <br />
      As a tech transplant with backgrounds in Philosophy (BA, 2013) and English
      Literature (MA, 2018), I love learning&mdash;plain and simple. This
      industry (and frontend development in particular) has proven to be the
      ideal field to help scratch that "lifelong student" itch.
    </p>
  ),
};
