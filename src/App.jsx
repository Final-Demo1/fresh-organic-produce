import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootsLayout from './layouts/RootsLayout'
import HomePage from './pages'
import About from './pages/OtherPages/About'
import Products from './pages/OtherPages/Products'
import Home from './pages/OtherPages/Home'
import Payment from './pages/OtherPages/Payment'
import Contact from './pages/OtherPages/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootsLayout/>,
      children: [{index: true, element: <HomePage/> },

        {
          path: 'home',
          element: <Home/>
        }, 
        
        {
          path: 'about',
          element: <About/>
        }, 

        {
          path: 'contact',
          element: <Contact/>
        }, 
        
        {
          path: 'products',
          element: <Products/>
        },
    
        {
          path: 'payment',
          element: <Payment/>
        },]
    },
  ])

  return (
  <RouterProvider router={router}/>
  )
}

export default App;
