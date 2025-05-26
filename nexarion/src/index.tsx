import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Layout } from './components/Layout';
import { Work } from './pages/Work';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'work', element: <Work /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
