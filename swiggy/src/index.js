import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Sign from './views/Sign In/Sign In';
import Offers from './views/Offers/Offers';
import Account from './views/Account/Account';
import Cart from './views/Add Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/offers',
    element: <Offers />
  },
  {
    path: '/signin',
    element: <Sign/>
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    
    <Home />
    <Offers />
    <Sign />
    <Account />
    <Cart />
  </RouterProvider>
);