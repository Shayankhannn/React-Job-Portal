import React from 'react'
import JobListings from '../components/JobListings'
import Hero from '../components/Hero'

const JobsPage = () => {
  return (
    <>
    <Hero title='Jobs Page' description='Browse Through all the Jobs '/>
    <section className='bg-blue-50 px-4 py-6'>
    <JobListings />
  </section>
  </>
  )
}

export default JobsPage