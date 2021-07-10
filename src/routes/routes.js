import { Home } from "../pages";
import { Cart } from "../pages";
import { ProductDetails } from "../components";
import { User } from "../pages";
import { Layout } from "../pages";
import { NotFound } from "../pages";


const routes = [
  { path: '/', element: <Home /> },
  { path: '/user', element: <User /> },
  { path: '*', element: <NotFound /> },
  {
    path: 'cart',
    element: <Layout />,
    children: [
      { path: '/', element: <Cart /> },
      { path: '/:productId', element: <ProductDetails /> },
    ]
  }
];

export default routes;

  