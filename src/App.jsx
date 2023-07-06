import { useState, useEffect } from 'react'
import './assets/css/style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Index from './pages/Index';
import Works from './pages/Works';
import About from './pages/About';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './pages/Contact';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/about', element: <About /> },
      { path: '/works', element: <Works /> },
      { path: '/contact', element: <Contact /> }
    ]
  }
])
function App() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1400,
      once: true,
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App
