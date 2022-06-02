import React from 'react'
import UsersMain from '../components/UsersMain'
import UsersSideBar from '../components/UsersSideBar'

const Users = () => {
  return (
    <div className='bg-gray-100 min-h-screen w-screen flex'>
        <UsersSideBar />
        <UsersMain />
    </div>
  )
}

export default Users