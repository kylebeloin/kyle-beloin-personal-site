import styles from "./Card.module.css";
import { Children, cloneElement, ReactElement } from "react";

export function Card({
  children,
  className,
  style,
}: {
  children: ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`${className ? className : ""} ${styles.card}`}
      style={style}
    >
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          className: `${child.props.className ? child.props.className : ""}`,
          style: {
            ...child.props.style,
          },
        });
      })}
    </div>
  );
}
