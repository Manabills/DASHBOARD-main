import React from 'react'
import DetailCard from './DetailCard'
import { FaEnvelope } from 'react-icons/fa';
import { BiCreditCard } from 'react-icons/bi';

const DeatilHead = () => {
  return (
    <div className='w-full flex items-center justify-between pb-6 border-b border-gray-300'>
        <div className='w-full '>
            <h1 className='text-2xl font-bold'>Ephraim Authur</h1>
            <div className='flex items-center space-x-2'>
                <p className='text-sm'>Benzo ID Benzo200</p>
                <span className='px-2 rounded-full bg-green-600 text-gray-100 font-medium text-sm'>
                    successful
                </span>
            </div>
        </div>

        <div className='space-y-2'>
            <div className='flex items-center justify-center space-x-2'>
                <DetailCard Icon={FaEnvelope} title={"Resend Pin"}/>
                <DetailCard Icon={FaEnvelope} title={"Upload ID"}/>
            </div>

            <div className='flex items-center justify-center space-x-2'>
                <DetailCard Icon={BiCreditCard} title={"Credit"}/>
                <DetailCard Icon={BiCreditCard} title={"Debit"}/>
            </div>
        </div>
    </div>
  )
}

export default DeatilHead