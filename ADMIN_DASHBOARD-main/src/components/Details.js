import React from 'react'
import DeatilHead from './DeatilHead'
import DetailAccount from './DetailAccout'
import DetailAddress from './DetailAddress'
import DetailIdInfo from './DetailIdInfo'
import DetailPersonal from './DetailPersonal'

const Details = () => {
  return (
    <div className='h-full w-2/3 p-8 bg-gray-50 shadow-xl'>
        <DeatilHead />
        <DetailPersonal />
        <DetailAddress />
        <DetailIdInfo />
        <DetailAccount />
    </div>
  )
}

export default Details