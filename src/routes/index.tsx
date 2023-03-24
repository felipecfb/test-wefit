import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/root';
import { Cart, Home } from '../pages';

enum Routes {
  HOME = '/',
  CART = '/cart'
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
      }
    ]
  }
]);
