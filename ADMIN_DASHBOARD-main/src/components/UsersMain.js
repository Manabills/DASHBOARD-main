import React from 'react'
import TableRow from './TableRow'
import { tableData } from '../utils/TableData'
import UsersCard from './UsersCard'

const UsersMain = () => {
  return (
    <div className='flex-1 p-2 mx-4'>
        <div className='pt-4 pb-8 w-full flex items-center justify-between'>
            <h1 className='font-medium text-2xl text-purple-800'>Users</h1>
            <div className='flex items-center space-x-2'>
                <span className='h-12 w-12 bg-black rounded-full'></span>
                <p className='text-sm font-medium text-gray-500'>Cosmos Appiah</p>
            </div>
        </div>

        <div className='flex space-x-2 mb-4'>
            <UsersCard title={"POTENTIAL USERS"}/>
            <UsersCard title={"UPLOAD USERS"} />
            <UsersCard title={"BENEFICIARIES"} />
            <UsersCard title={"PROCESSING USERS"} />
            <UsersCard title={"User OTPs"} />
        </div>

        <div className='w-full rounded-lg p-4 min-h-screen bg-gray-50'>
            <div className='flex mb-8 items-center justify-between'>
                <h1 className='text-purple-800 font-medium text-xl '>Users {"(30)"}</h1>
                <input type={"text"} className="outline-none border px-2 py-1 w-96"
                    placeholder={"Search fullname/momo/status"}/>
            </div>

            <div className='w-full pl-4'>
                <div className='flex items-center justify-between text-md font-medium w-full mb-4 px-4'>
                    <h3 className='w-1/5 flex flex-col items-left'>User</h3>
                    <h3 className='w-1/5 flex flex-col items-left'>Contact</h3>
                    <h3 className='w-1/5 flex flex-col items-left'>Date Joined</h3>
                    <h3 className='w-1/5 flex flex-col items-left'>Level</h3>
                    <h3 className='w-1/5 flex flex-col items-left'>Status</h3>
                </div>

                {
                    tableData.map((data, idx) => (
                        <TableRow key={idx} name={data.name} city={data.city} date={data.date} level={data.level} time={data.time} phone={data.phone} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default UsersMain