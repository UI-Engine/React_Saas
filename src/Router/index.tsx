// RenderRoutesWrapper.tsx
import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routesConfig from "./routesConfig";
import { BrowserRouter } from "react-router-dom";

// Add proper type annotation for routes parameter
const RenderRoutes = (routes: any[]) => {
  return (
    <>
      {routes.map((route, index) => (
        <Route
          key={route.path || index}
          path={route.path}
          element={route.element}
          index={route.index}
        >
          {route.children && RenderRoutes(route.children)}
        </Route>
      ))}
    </>
  );
};

const AppRouter = () => {
  //   const location = useLocation();

  //   useLayoutEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [location]);

  return (
    <BrowserRouter>
      <Routes>{RenderRoutes(routesConfig)}</Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
