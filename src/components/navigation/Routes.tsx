import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import RoutesName from "../../utils/routes";

const MainPage = lazy(() => import("../../containers/MainPageContainer"));
const NewListPage = lazy(() => import("../../containers/NewListPageContainer"));

const Routes = () => (
  <Switch>
    <Route exact path={RoutesName["/"]}>
      <MainPage />
    </Route>
    <Route
      exact
      path={[
        RoutesName["/new-list"],
        `${RoutesName["/edit-list"]}/:id`,
      ]}
    >
      <NewListPage />
    </Route>
  </Switch>
);

export default Routes;
