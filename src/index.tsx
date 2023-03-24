import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { router } from './routes';
import { GlobalStyles } from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
    </CartProvider>
  </React.StrictMode>
);
