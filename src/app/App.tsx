import routeWrapper from "../common/routes";
import { useLocation, useRoutes } from "react-router";
import { createContext, useEffect, useState } from "react";

export const PageHistoryContext = createContext<PageHistory>({
  prevPage: "",
  currPage: "",
  inverted: false,
});

type PageHistory = {
  prevPage: string;
  currPage: string;
  inverted: boolean;
};

function App() {
  const location = useLocation();
  const routes = useRoutes(routeWrapper, location);

  const [{ prevPage, currPage, inverted }, setPageHistory] =
    useState<PageHistory>({
      prevPage: "",
      currPage: location.pathname,
      inverted: false,
    });

  useEffect(() => {
    if (location.pathname !== currPage) {
      setPageHistory({
        prevPage: currPage,
        currPage: location.pathname,
        inverted: !inverted,
      });
    }
  }, [location, inverted, currPage]);

  return (
    <>
      <PageHistoryContext.Provider value={{ inverted, prevPage, currPage }}>
        {routes}
      </PageHistoryContext.Provider>
    </>
  );
}

export default App;
