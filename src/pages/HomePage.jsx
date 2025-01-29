import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAll from '../components/ViewAll'


const HomePage = () => {
  return (
    <>

   
    <Hero title=" Become a React Dev" description=" Find the React job that fits your skills and needs"/>
 <HomeCards />   
 <JobListings isHome={true}/>   
 <ViewAll />
 
   </>
  )
}

export default HomePage