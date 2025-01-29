import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import { createBrowserRouter } from 'react-router-dom';


const App = () => {

  const router = createBrowserRouter(
    
  );

  return (
  <>

   <Navbar />
   <Hero title=" Become a React Dev" description=" Find the React job that fits your skills and needs"/>
<HomeCards />   
<JobListings />   

  </>
  )
}

export default App
