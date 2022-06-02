

const DetailAddress = () => {
  return (
    <div className='w-full felx py-4 border-b border-gray-300'>
            <h1 className='text-xl font-medium mb-4'>Address</h1>
        
        <div className='w-full flex items-center mb-4'>
            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>Country</p>
                <p className='text-md font-medium'>Ghana</p>
            </div>

            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>City</p>
                <p className='text-md font-medium'>Accra</p>
            </div>
        </div>

        <div className='w-full flex items-center mb-4'>
            <div className='w-1/2'>
            <p className='text-xs text-gray-500'>Home Address</p>
            <p className='text-md font-medium'>Anaji Queen of Peace</p>
            </div>

            <div className='w-1/2'>
                <p className='text-xs text-gray-500'>Digital Address</p>
            </div>
        </div>
        
    </div>
  )
}

export default DetailAddress