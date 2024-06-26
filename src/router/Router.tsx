import { FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

interface RouterProps {
  allRoutes: RouteObject[];
}

const Router: FC<RouterProps> = ({ allRoutes }) => {
  const routes = useRoutes([...allRoutes]);
  return routes;
};

export default Router;
