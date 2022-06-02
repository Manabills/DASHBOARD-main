import React from 'react'

const UserImages = () => {
  return (
    <div className='w-1/3 min-h-screen ml-4'>
      <div className='w-full h-screen ml-4'>
          <div className='h-2/3 w-full bg-cover bg-center'
            style={{backgroundImage: `url(https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg)`}}
          >

          </div>

          <div className='h-1/3 w-full bg-cover bg-center'
            style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7Q86PnChUcMfMFJCLKcJEUxeZe5A1gYeJA&usqp=CAU)`}}
          >
          </div>
      </div>

      <div className='space-x-2 w-full flex items-center justify-center mt-4'>
        <buuton className="text-center w-32 py-3 text-gray-50 font-medium cursor-pointer bg-green-500 hover:bg-green-600 rounded-lg">
          APPROVE
        </buuton>

        <buuton className="text-center w-32 py-3 text-gray-50 font-medium cursor-pointer bg-red-500 hover:bg-red-600 rounded-lg">
          DISAPPROVE
        </buuton>
      </div>
    </div>
  )
}

export default UserImages