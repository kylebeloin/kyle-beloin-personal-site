export type PageContext = {
  page: string;
  delta: number;
  scroll: number;
  current: IntersectionObserverEntry;
  visible: IntersectionObserverEntry;
};

export type ButtonProps = {
  callback?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[] | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: string;
  [key: string]: any;
  icon?: string;
};

export type ContentItem = {
  key?: string;
  title: string;
  content: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  link?: string;
  image?: string;
  [key: string]: any;
};
