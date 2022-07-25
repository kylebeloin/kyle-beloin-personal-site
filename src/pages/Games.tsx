import { PageOutletContext } from "./Layout";
import { Container } from "../components/Container";
import gameStyle from "./Games.module.css";
import layout from "./Layout.module.css";
import React, { useRef, useState, useEffect } from "react";
import GameFrame from "../components/GamesFrame";
import { Card } from "../components/Card";

const games = [
  {
    name: "Snake",
    description: <p>"A game of snake"</p>,
    value: "snake",
    image: "",
    url: "https://gleeful-torte-7f47b0.netlify.app",
  },
  {
    name: "MineSweeper",
    description: <p>"A game of minesweeper"</p>,
    value: "minsweeper",
    image: "",
    url: "https://willowy-pothos-5182c1.netlify.app/",
  },
];

export default function Games() {
  const { page } = PageOutletContext();
  const [width, setWidth] = useState(window.innerWidth);
  const [game, setGame] = useState("");
  const [show, setShow] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShow(true);
  };

  useEffect(() => {
    if (ref.current && width !== ref.current.getBoundingClientRect().width) {
      setWidth(window.innerWidth);
    }
  }, [width]);

  return (
    <section
      className={`${page} ${gameStyle.page}`}
      style={
        {
          "--background-color":
            game.length > 0 ? "white" : `var(--background-color)`,
          "--game-number": games.length,
        } as React.CSSProperties
      }
      dir="ltr"
    >
      <div
        className={`${layout.scroller}`}
        style={
          {
            marginLeft: "0px",
          } as React.CSSProperties
        }
      >
        <div
          className={`${gameStyle["game-selection-container"]} ${
            !show ? gameStyle.invisible : gameStyle.visible
          } ${game.length > 0 ? gameStyle.return : ""}`}
        >
          {games.map((g, index) => {
            return (
              <Card
                key={index}
                onClick={() => {
                  console.log(g.value);
                  setGame(g.url);
                  setShow(false);
                }}
                style={
                  {
                    "--animation-order": index + 1,
                    "--background-color": "white",
                  } as React.CSSProperties
                }
                className={`${gameStyle.card} ${
                  !show ? gameStyle.invisible : gameStyle.visible
                } ${game.length > 0 ? gameStyle.return : ""}`}
              >
                <div
                  style={
                    {
                      width: "100%",
                      height: "100%",
                    } as React.CSSProperties
                  }
                >
                  <h2>{g.name}</h2>
                  {g.description}
                </div>
              </Card>
            );
          })}
        </div>

        <Container
          visible={true}
          className={`${gameStyle["game-container"]}`}
          style={
            {
              "--background-color":
                game.length > 0 ? "var(--tertiary)" : `var(--primary)`,
            } as React.CSSProperties
          }
        >
          <GameFrame
            width={width}
            show={!show || game.length > 0}
            url={game}
            className={`${gameStyle["game-frame"]}`}
            setShow={handleClick}
          />
        </Container>
      </div>
    </section>
  );
}
