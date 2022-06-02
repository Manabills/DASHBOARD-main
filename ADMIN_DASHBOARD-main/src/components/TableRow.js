import React from 'react'
import { Link } from "react-router-dom";

const TableRow = ({name, phone, city, date, time, level}) => {
  return (
     <Link to={"user"}>
    <div className='flex px-4 items-center  rounded-md hover:bg-gray-200 cursor-pointer h-[4.5rem]'>
        <div className='w-1/5 flex flex-col items-left'>
            <p className='text-sm font-medium'>{name}</p>
            <p className='text-xs text-gray-700'>Benzo 230</p>
        </div>

        <div className='w-1/5 flex flex-col items-left'>
            <p className='text-sm font-medium'>{phone}</p>
            <p className='text-xs text-gray-700'>{city}</p>
        </div>

        <div className='w-1/5 flex flex-col items-left'>
            <p className='text-sm font-medium'>{date}</p>
            <p className='text-xs text-gray-700'>{time}</p>
        </div>

        <div className='w-1/5 flex flex-col items-left'>
            <p className='text-sm font-medium'>{level}</p>
        </div>

        <div className='px-4 rounded-full bg-green-600 text-gray-100 font-medium'>
            successful
        </div>
    </div>
     </Link>
  )
}

export default TableRow