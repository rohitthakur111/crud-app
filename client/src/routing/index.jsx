import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main";
import HomePage from "../pages/home";
import AddProduct from "../pages/addProduct";
import ProductPage from "../pages/product";
import EditPage from "../pages/edit";

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
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/product/:id/edit",
        element: <EditPage />,
      },
    ],
  },
]);

export default router;
