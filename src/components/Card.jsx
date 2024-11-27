import React from 'react'

const Card = ({children, bg ='bg-grey-100' }) => {
  return (
    <div className={`${bg} rounded-lg p-6 shadow-md`}>
        {children}
        
    </div>
  )
}

export default Card