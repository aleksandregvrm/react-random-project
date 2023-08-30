import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { HomePage,HomeLayout,Questions } from './pages';
import { Error } from './components';





  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children: [
          {
            index:true,
            element:<HomePage/>,
          },
          {
            // index:true,
            path:'about',
            element:<h2>dachi siristiani rojaa about</h2>,
          },
          {
            // index:true,
            path:'products',
            element:<HomePage/>,
          },
          {
            // index:true,
            path:'questions',
            element:<Questions/>,
          },
      ]
    },
  ]);
  
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
