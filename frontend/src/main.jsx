import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import ProductScreen from './screens/ProductScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' index={true} element={<HomeScreen />}></Route>
      <Route path='/product/:id' element={<ProductScreen />}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
