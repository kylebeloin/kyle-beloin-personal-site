import styles from "./Container.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  ReactElement,
  createContext,
  useMemo,
} from "react";

export const VisibleContext = createContext<boolean>(false);

export function Container({
  children,
  visible,
  className,
  style,
}: {
  children: ReactElement[] | ReactElement;
  visible: IntersectionObserverEntry | boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const value = useMemo(() => {
    return isVisible;
  }, [isVisible]);

  useEffect(() => {
    // check if visible is IntersectionObserverEntry
    if (visible instanceof IntersectionObserverEntry) {
      if (visible && visible.isIntersecting && ref.current === visible.target) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(visible);
    }
  }, [visible]);

  return (
    <div
      className={`${className ? className : ""} ${styles.container} ${
        isVisible ? styles.visible : ""
      }`}
      ref={ref}
      style={style}
    >
      {/* If isVisible is true, the children are rendered with visible style plus any visible styles passed as props */}
      {/* If children have children,  */}
      <VisibleContext.Provider value={value}>
        {isVisible
          ? React.Children.map(children, (child: ReactElement) => {
              return React.cloneElement(child, {
                className: `${
                  child.props.className ? child.props.className : ""
                }`,
                children: child.props.children,
              });
            })
          : React.Children.map(children, (child: ReactElement) => {
              return React.cloneElement(child, {
                className: `${child.props.className} `,
              });
            })}
      </VisibleContext.Provider>
    </div>
  );
}
