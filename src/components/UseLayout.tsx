//  Hook that controls the layout of the page.

import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { useLocation } from "react-router-dom";
import { debounce, getThresholds } from "../common/utility";
import { PageHistoryContext } from "../app/App";

export const UseLayout = () => {
  const location = useLocation();
  const { inverted, currPage } = useContext(PageHistoryContext);
  const [{ delta, trajectory }, setScrollData] = useState<{
    delta: number;
    trajectory: number;
  }>({
    delta: 0,
    trajectory: 0,
  });
  // -1 = down, 1 = up, 0 = top of page
  const [thresholds, setThresholds] = useState<number[]>([]);
  const [observer, setObserver] = useState<IntersectionObserver>();
  const [visible, setVisible] = useState<IntersectionObserverEntry>();

  const ref = useRef<HTMLDivElement>(null);

  // debounce scroll event
  const handleScroll = useCallback(() => {
    if (ref.current) {
      const current = ref.current;
      const t = current.scrollTop > delta ? 1 : -1;
      if (trajectory === 0 || t !== trajectory) {
        setScrollData({
          delta: current.scrollTop,
          trajectory: t,
        });
      } else {
        setScrollData((state) => ({
          ...state,
          delta: current.scrollTop,
        }));
      }
    }
  }, [ref, delta, trajectory]);

  const handleScrollDebounce = useMemo(
    () => debounce(handleScroll, 300),
    [handleScroll]
  );

  // layout has intersection observer every 100vh
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setVisible(entries[0]);
    }
  };

  const handleIntersectionDebounce = useMemo(
    () => debounce(handleIntersection, 10),
    []
  );

  useEffect(() => {
    const layout = ref.current;
    if (layout) {
      layout.addEventListener("scroll", handleScrollDebounce);
    }
    return () => {
      if (layout) {
        layout.removeEventListener("scroll", handleScrollDebounce);
      }
    };
  }, [ref, handleScrollDebounce]);

  useEffect(() => {
    const layout = ref.current;

    if (layout && observer === undefined) {
      const elems = Array.from(
        layout.querySelectorAll<HTMLDivElement>("[class*=_container]")
      );
      const thresholds = getThresholds(elems);
      const observer = new IntersectionObserver(handleIntersectionDebounce, {
        root: layout,
        threshold: thresholds,
      });
      elems.forEach((elem) => {
        observer.observe(elem);
      });
      setObserver(observer);
      setThresholds(thresholds);
    }
    return () => {
      if (observer) {
        console.log("unobserve");
        observer.disconnect();
      }
    };
  }, [ref, observer, handleIntersectionDebounce]);

  useEffect(() => {
    if (location.pathname !== currPage) {
      if (observer) {
        observer.disconnect();
        setObserver(undefined);
      }
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [location, currPage, observer]);

  return { ref, delta, trajectory, thresholds, observer, visible, inverted };
};
