import { Home } from "../pages";
import { Cart } from "../pages";
import { ProductDetails } from "../components";
import { User } from "../pages";
import { Layout } from "../pages";
import { NotFound } from "../pages";
import { ProductScreen } from "../pages";
import { CartScreen } from "../pages";


const routes = [
  { path: '/', element: <Home /> },
  { path: '/user', element: <User /> },
  { path: '*', element: <NotFound /> },
  /*
  * shopping-cart with Redux and express server
  * @see https://youtu.be/0divhP3pEsg
*/
  {
    path: 'product',
    element: <Layout />,
    children: [     
      { path: '/:id', element: <ProductScreen /> },      
    ]
  },
  {
    path: 'cart2',
    element: <Layout />,
    children: [
      { path: '/', element: <CartScreen /> },
    ]
  },
  /*
    * previous example
    * @see https://youtu.be/0W6i5LYKCSI
  */
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

  