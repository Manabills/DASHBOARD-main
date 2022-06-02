

const DetailIdInfo = () => {
    return (
      <div className='w-full felx py-4 border-b border-gray-300'>
              <div className="w-full mb-4 flex items-center space-x-2">
                <h1 className='text-xl font-medium'>Id Info</h1>
                <span className="p-2 bg-yellow-500 rounded-md text-gray-100 font-medium"> 
                    pending
                </span>
              </div>
          
          <div className='w-full flex items-center mb-4'>
              <div className='w-1/2'>
                  <p className='text-xs text-gray-500'>id Type</p>
                  <p className='text-md font-medium'>Ghana Card</p>
              </div>
  
              <div className='w-1/2'>
                  <p className='text-xs text-gray-500'>id Number</p>
                  <p className='text-md font-medium'>72306789465</p>
              </div>
          </div>
  
          <div className='w-full flex items-center mb-4'>
              <div className='w-1/2'>
              <p className='text-xs text-gray-500'>Old id Type</p>
              <p className='text-md font-medium'>Ghana Card</p>
              </div>
  
              <div className='w-1/2'>
                  <p className='text-xs text-gray-500'>Old id Number</p>
              </div>
          </div>
          
      </div>
    )
  }
  
  export default DetailIdInfo