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
  ref,
}: {
  children: ReactElement[] | ReactElement;
  visible: IntersectionObserverEntry | boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement>;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  ref = ref || containerRef;

  const value = useMemo(() => {
    return isVisible;
  }, [isVisible]);

  useEffect(() => {
    // check if visible is IntersectionObserverEntry
    if (visible instanceof IntersectionObserverEntry) {
      console.log(visible);
      if (
        visible &&
        visible.isIntersecting &&
        ref &&
        ref.current === visible.target
      ) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(visible);
    }
  }, [visible, ref]);

  return (
    <div
      className={`${styles.container} ${className ? className : ""} ${
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
