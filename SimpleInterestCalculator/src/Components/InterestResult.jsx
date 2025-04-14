import React from 'react'

const InterestResult = ( {interest} ) => {
    if(interest == null) {
        return null;
    }
    
  return (
       <div className='alert alert-info mt-4'>
            <h3>Calculated Simple Interest:</h3>
            <p className='text-lg font-bold'>{interest}</p>
            <p className='text-sm'>This is the interest earned on your investment.</p>
       </div>

  )
}

export default InterestResult
