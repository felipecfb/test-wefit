import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/root';
import { Home } from '../pages';

enum Routes {
  HOME = '/'
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />
      }
    ]
  }
]);
