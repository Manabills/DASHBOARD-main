import React from 'react'

const UsersCard = ({title}) => {
  return (
    <div className='flex pl-4 items-center  bg-gray-50 w-52 h-20 rounded-lg'>
        <p className='text-sm font-medium'>{title}</p>
    </div>
  )
}

export default UsersCard