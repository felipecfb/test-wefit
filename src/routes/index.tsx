import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/root';
import { Cart, Checkout, Home } from '../pages';

enum Routes {
  HOME = '/',
  CART = '/cart',
  CHECKOUT = '/checkout'
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
        path: Routes.CHECKOUT,
        element: <Checkout />
      }
    ]
  }
]);
