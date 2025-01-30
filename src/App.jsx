import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import SingleJob from './pages/SingleJob';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path='/jobs' element={<JobsPage />} />
          <Route path='/jobs/:id' element={<SingleJob />} />
          <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return (

  <RouterProvider router={router} />

 

 
  )
}

export default App
