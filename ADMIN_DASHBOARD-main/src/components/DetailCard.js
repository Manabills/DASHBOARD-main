import React from 'react'

const DetailCard = ({Icon, title}) => {
  return (
    <div className='rounded-md text-purple-900 cursor-pointer h-10 w-44 border border-purple-500 flex items-center justify-center space-x-2'>
        <Icon />
        <p className='font-medium text-sm'>{title}</p>
    </div>
  )
}

export default DetailCard