import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { RouteObject } from "react-router";
import Layout from "../pages/Layout";
import { JsxElement } from "typescript";

type Route = {
  path: string;
  key: string;
  element: JSX.Element;
};

export const routes: Route[] = [
  {
    path: "/" as string,
    element: <Home key="home" />,
    key: "home",
  },
  {
    path: "/about" as string,
    element: <About key="about" />,
    key: "about",
  },
  {
    path: "/projects" as string,
    element: <Projects key="projects" />,
    key: "projects",
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
