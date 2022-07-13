import styles from "./ProjectCards.module.css";
import { Card } from "./Card";
import { useContext, useState, useEffect } from "react";
import { VisibleContext } from "./Container";

const projects = [
  {
    title: "Project 1",
    description: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita
        quas reiciendis sequi nobis rerum accusamus maxime atque veritatis
        ullam!
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti
        amet magni earum nostrum distinctio facere eligendi, veniam explicabo
        rerum soluta tempore, pariatur quisquam animi blanditiis asperiores quis
        repudiandae nemo officiis maiores officia labore delectus in harum.
        Ullam reprehenderit unde aliquam amet exercitationem inventore quibusdam
        fuga deleniti ea. Incidunt, vel?
      </p>
    ),
    image: "https://picsum.photos/id/1/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Project 2",
    description: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita
        quas reiciendis sequi nobis rerum accusamus maxime atque veritatis
        ullam!
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deleniti
        amet magni earum nostrum distinctio facere eligendi, veniam explicabo
        rerum soluta tempore, pariatur quisquam animi blanditiis asperiores quis
        repudiandae nemo officiis maiores officia labore delectus in harum.
        Ullam reprehenderit unde aliquam amet exercitationem inventore quibusdam
        fuga deleniti ea. Incidunt, vel?
      </p>
    ),
    image: "https://picsum.photos/id/2/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Project 3",
    description: (
      <p>
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
        earum. Voluptatibus, voluptas rem, ut nobis ducimus, tenetur odit
        laboriosam quod placeat velit laudantium! Explicabo, odio quam. Esse
        voluptate minus deserunt ipsam voluptas, fugit officiis perspiciatis
        fugiat obcaecati quisquam, error praesentium architecto numquam! Modi,
        nemo quis. Doloribus deserunt minus itaque dignissimos."
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
