import styles from "./ProjectCards.module.css";
import { Card } from "../Card";
import { useContext, useState, useEffect } from "react";
import { VisibleContext } from "../Container";
import { ContentItem } from "../../common/types";
import icons from "../../common/icons";

export default function ProjectCards({
  projects = [],
}: {
  projects: ContentItem[];
}) {
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
            {project.content || project.description}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {project.link}
              </a>
            )}

            <div className={styles.tech}>
              {project.tech.map((tech: string, index: Number) => (
                <div key={`${index}`} className={styles.techItem}>
                  {icons(tech)}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
