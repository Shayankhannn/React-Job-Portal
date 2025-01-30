import React, { useEffect, useState } from 'react'

import JobListing from './JobListing'
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {
  const [job,setJob] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data)
      setJob(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    fetchJobs();
  },[])
    
  return (
    <>
     <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Featured Jobs' : 'All Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {loading ? (<Spinner loading={loading}/>) : (

          <>
          
        {job.map((job)=>(
          <JobListing key={job.id} job= { job }  />
        ))}
          </>

        )}

          
          
          
        </div>       
      </div>
    </section>
    </>
  )
}

export default JobListings