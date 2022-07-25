import styles from "./Card.module.css";
import { Children, cloneElement, ReactElement } from "react";

export function Card({
  children,
  className,
  style,
  onClick,
}: {
  children: ReactElement[] | ReactElement;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <div
      className={`${className ? className : ""} ${styles.card} ${
        onClick ? styles.clickable : ""
      }`}
      style={style}
      onClick={onClick}
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
