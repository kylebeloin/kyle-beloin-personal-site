import Home from "../pages/Home";
import About from "../pages/About";
import { RouteObject } from "react-router";
import Layout from "../pages/Layout";

export const routes = [
  {
    path: "/" as string,
    element: <Home />,
    key: "home",
  },
  {
    path: "/about" as string,
    element: <About />,
    key: "about",
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
