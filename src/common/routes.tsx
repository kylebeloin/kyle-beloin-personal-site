import Home from "../pages/Home";
// import About from "../pages/About";
import Projects from "../pages/Projects";
import { RouteObject } from "react-router";
import Layout from "../pages/Layout";
import Games from "../pages/Games";

type Route = {
  path: string;
  key: string;
  element: JSX.Element;
  label?: string;
  nav?: boolean;
};

export const routes: Route[] = [
  {
    path: "/" as string,
    element: <Home key="home" />,
    key: "home",
    label: "Home",
    nav: true,
  },
  // {
  //   path: "/about" as string,
  //   element: <About key="about" />,
  //   key: "about",
  // },
  {
    path: "/projects" as string,
    element: <Projects key="projects" />,
    key: "projects",
    label: "Projects",
    nav: true,
  },
  {
    path: "/games-and-visualizations" as string,
    element: <Games key="games-and-visualizations" />,
    key: "games-and-visualizations",
    label: "Games & Visualizations",
    nav: false,
  },
];

const routeWrapper: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
];

export default routeWrapper;
