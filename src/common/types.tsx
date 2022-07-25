export type PageContext = {
  page: string;
  delta: number;
  scroll: number;
  current: IntersectionObserverEntry;
  visible: IntersectionObserverEntry;
};

export type Game = {
  name: string;
  description: string;
  value: string;
  image: string;
  url: string;
};
