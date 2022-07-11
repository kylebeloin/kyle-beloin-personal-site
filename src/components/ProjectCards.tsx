import styles from "./ProjectCards.module.css";
import { Card } from "./Card";
import { useContext, useState, useMemo, useEffect } from "react";
import { VisibleContext } from "./Container";
import container from "./Container.module.css";

const projects = [
  {
    title: "Project 1",
    description: "This is a project",
    image: "https://picsum.photos/id/1/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Project 2",
    description: "This is a project",
    image: "https://picsum.photos/id/2/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, earum. Voluptatibus, voluptas rem, ut nobis ducimus, tenetur odit laboriosam quod placeat velit laudantium! Explicabo, odio quam. Esse voluptate minus deserunt ipsam voluptas, fugit officiis perspiciatis fugiat obcaecati quisquam, error praesentium architecto numquam! Modi, nemo quis. Doloribus deserunt minus itaque dignissimos.",
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
            <p>{project.description}</p>
            <a href={project.link}>{project.link}</a>
          </Card>
        ))}
      </div>
    </div>
  );
}
