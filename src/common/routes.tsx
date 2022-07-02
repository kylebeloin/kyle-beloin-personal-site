import Home from "../pages/Home";
import About from "../pages/About";
import { RouteObject, useRoutes } from "react-router";
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

export default function useRoutesWithRouter() {
  return useRoutes(routeWrapper);
}
