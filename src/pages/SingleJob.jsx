import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

const SingleJob = () => {

  const {id} = useParams();
  const job = useLoaderData();

  return (
   <>
   {job.title}
   </>
  )
}

export default SingleJob