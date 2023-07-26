import { lazy, Suspense } from "react";
import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Homescreen from "./App/Screens/Homescreen/Homescreen";
import TributeMap from "./App/Screens/TributeMap";
import About from "./App/Screens/About";

const routes = [
  {
    path: "/",
    exact: true,
    Component: Homescreen,
  },
  {
    path: "/map",
    exact: true,
    Component: TributeMap,
  },
  {
    path: "/about",
    exact: true,
    Component: About,
  },
];
const Router = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        {routes.map(({ path, Component, exact }) => (
          <Route
            path={path}
            key={path}
            exact={exact}
            render={() => {
              return (
                // some pages seem to take time to load so leaving suspense in
                // <Suspense fallback={null}>
                <Component />
                // </Suspense>
              );
            }}
          />
        ))}
      </Switch>
    </>
  );
};

export default Router;
