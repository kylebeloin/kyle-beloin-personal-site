// smooth scroll from current position a to target element b

//  smoothScroll cubic-bezier(0.4, 0, 0.2, 1)
export function smoothScroll(
  current: number,
  target: number,
  layout: HTMLDivElement,
  polarity: number = 1
) {
  const currentScroll = current;
  const targetScroll = target;
  const scrollDistance = targetScroll - currentScroll;
  const scrollStep = Math.round(scrollDistance / 100);
  let currentScrollPosition = currentScroll;
  if (polarity === 1) {
    const interval = setInterval(() => {
      currentScrollPosition += scrollStep * polarity;
      layout.scrollTo(0, currentScrollPosition);
      if (currentScrollPosition >= targetScroll) {
        clearInterval(interval);
      }
    }, 1);
  } else if (polarity === -1) {
    const interval = setInterval(() => {
      currentScrollPosition -= scrollStep * polarity;
      layout.scrollTo(0, currentScrollPosition);
      if (currentScrollPosition <= targetScroll) {
        clearInterval(interval);
      }
    }, 1);
  }
}

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// function takes an array of elements, determines their height, and returns an array of thresholds that can be used to determine which element is visible
export const getThresholds = (elements: HTMLDivElement[]) => {
  const heights = elements.map((el: HTMLElement) => el.offsetHeight);
  const totalHeight = heights.reduce((acc, cur) => acc + cur, 0);
  const thresholds = heights.map((height) => height / totalHeight);

  return thresholds as number[];
};

export const isMobile = () => {
  console.log("isMobile");
  return window.innerWidth < 768;
};
