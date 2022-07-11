import { PageOutletContext } from "./Layout";
import styles from "./Home.module.css";
import layout from "../pages/Layout.module.css";
import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import ProjectCards from "../components/ProjectCards";

export default function Home() {
  const { page, visible } = PageOutletContext();
  // when user scrolls the container, the background color changes

  const [visibleElement, setVisibleElement] =
    useState<IntersectionObserverEntry>();

  useEffect(() => {
    if (visible && visible !== visibleElement) {
      setVisibleElement(visible);
    }
  }, [visible, visibleElement]);

  return (
    <section className={`${page}`} dir="ltr">
      <div className="scroller">
        <Container visible={visible}>
          <h1 className={`${styles.copy}`}>hello</h1>
          <div className={`${styles.copy}`}>
            <p>my name is</p>
            <h2>Kyle Beloin</h2>
          </div>
        </Container>

        {/* Home Content */}

        <Container
          visible={visible}
          style={{
            overflowX: "auto",
          }}
        >
          <h2 className={styles.header}>Highlighted Projects</h2>
          <ProjectCards />
        </Container>
        <div
          dir="ltr"
          className={`${layout.container} ${layout["bg__color--inverse"]}`}
        >
          <h1>Home</h1>
          <div className={`${styles.copy}`}>
            <h2>About</h2>
            <p>
              I am a web developer with a passion for building beautiful,
              responsive websites. I have a background in philosophy and a
              passion for learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
