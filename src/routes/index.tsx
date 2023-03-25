import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/root';
import { Cart, OrderSuccess, Home } from '../pages';

enum Routes {
  HOME = '/',
  CART = '/cart',
  ORDER_SUCCESS = '/order-success'
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />
      },
      {
        path: Routes.CART,
        element: <Cart />
      },
      {
        path: Routes.ORDER_SUCCESS,
        element: <OrderSuccess />
      }
    ]
  }
]);
