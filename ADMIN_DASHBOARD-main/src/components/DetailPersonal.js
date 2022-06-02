import React from 'react'

const DetailPersonal = () => {
  return (
    <div className='w-full felx py-4 border-b border-gray-300'>
            <h1 className='text-xl font-medium mb-4'>Personal</h1>
        
        <div className='w-full flex items-center mb-4'>
            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>First Name</p>
                <p className='text-md font-medium'>Ephraim</p>
            </div>

            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>Last Name</p>
                <p className='text-md font-medium'>Ephraim</p>
            </div>
        </div>

        <div className='w-full flex items-center mb-4'>
            <div className='w-1/2'>
            <p className='text-xs text-gray-500'>Phone Number</p>
            <p className='text-md font-medium'>+233544806784</p>
            </div>

            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>Date of Birth</p>
                <p className='text-md font-medium'>03-08-1995</p>
            </div>
        </div>

        <div className='w-full flex items-center mb-4'>
            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>Account Level</p>
                <p className='text-md font-medium'>beginner</p>
            </div>

            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>Account Status</p>
                <p className='text-md font-medium'>Pending</p>
            </div>
        </div>
        
    </div>
  )
}

export default DetailPersonal