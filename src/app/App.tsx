import routeWrapper from "../common/routes";
import { useLocation, useRoutes } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();
  const routes = useRoutes(routeWrapper, location);
  return <TransitionGroup>{routes}</TransitionGroup>;
}

export default App;
