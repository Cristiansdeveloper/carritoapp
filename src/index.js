import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Carro from './carrito/Carro';
const port = process.env.PORT || 6558;
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "carrito",
    element: <Carro />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 