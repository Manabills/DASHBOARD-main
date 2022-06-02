import React from 'react'
import Details from './Details'
import UserImages from './UserImages'

const UserDetails = () => {
  return (
    <div className='h-full w-full p-6 flex justify-center'>
            <Details />
            <UserImages />
    </div>
  )
}

export default UserDetails