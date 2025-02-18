import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main";
import HomePage from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
