import useRoutesWithRouter from "../common/routes";
import WithRouter from "../components/WithRouter";
function App() {
  const routes = useRoutesWithRouter();
  return routes;
}

export default WithRouter(App);
