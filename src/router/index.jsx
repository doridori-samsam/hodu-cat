import { useRoutes } from "react-router-dom";
import { MainLayout } from "@/components/layouts";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";

function Router() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  const element = useRoutes(routes);
  return element;
}

export default Router;
