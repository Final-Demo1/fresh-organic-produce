import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './pages/auth/AuthContext';
import RootsLayout from './layouts/RootsLayout';
import HomePage from './pages';
import About from './pages/OtherPages/About';
import Products from './pages/OtherPages/Products';
import Home from './pages/OtherPages/Home';
import Payment from './pages/OtherPages/Payment';
import Contact from './pages/OtherPages/Contact';
import Login from './pages/OtherPages/Login';
import Register from './pages/OtherPages/Register';
import Cart from './cart/Cart';
import SingleProduct from './pages/OtherPages/SingleProduct';
import ProtectedRoute from './pages/auth/ProtectedRoute';
import Logout from './pages/OtherPages/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootsLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <SingleProduct /> },
      {
        path: 'payment',
        element: (
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        ),
      },
      { path: 'login', element: <Login /> },
      { path: 'logout', element: <Logout /> },
      { path: 'register', element: <Register /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
