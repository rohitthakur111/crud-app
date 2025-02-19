import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main";
import HomePage from "../pages/home";
import AddProduct from "../pages/addProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
