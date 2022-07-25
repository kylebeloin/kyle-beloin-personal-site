import styles from "./ProjectCards.module.css";
import { Card } from "../Card";
import { useContext, useState, useEffect } from "react";
import { VisibleContext } from "../Container";

const projects = [
  {
    title: "Learning Management System / Experiment Builder",
    description: (
      <p>
        A learning management system that allows teachers to create courses and
        assign them to students. The system can also be used to administer data
        collection and analysis.
      </p>
    ),
    image: "https://picsum.photos/id/1/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Personal Websites and Portfolios",
    description: (
      <p>
        I've created a few personal websites and portfolios, including this one.
      </p>
    ),
    image: "https://picsum.photos/id/2/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Game Development",
    description: (
      <p>
        A few games I've created in an effor to explore game development with
        React. I've helped create a game in C# and Unity.
      </p>
    ),
    image: "https://picsum.photos/id/2/200/300",
    link: "https://www.google.com",
  },
];

export default function ProjectCards() {
  const visible = useContext(VisibleContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (visible && !isVisible) {
      setIsVisible(true);
    } else if (visible === false && isVisible) {
      setIsVisible(false);
    }
  }, [visible, isVisible]);

  return (
    <div
      className={`${styles.projects}`}
      style={{ "--project-number": projects.length } as React.CSSProperties}
    >
      <div
        className="scroller"
        // set css property --project-number to the length of the projects array
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            style={{ "--animation-order": index + 1 } as React.CSSProperties}
            className={`${isVisible ? styles.visible : ""}`}
          >
            <h2>{project.title}</h2>
            {project.description}
            <a href={project.link}>{project.link}</a>
          </Card>
        ))}
      </div>
    </div>
  );
}
