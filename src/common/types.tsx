export type PageContext = {
  page: string;
  delta: number;
  scroll: number;
  current: IntersectionObserverEntry;
  visible: IntersectionObserverEntry;
};
