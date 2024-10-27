import React from 'react'
import Image from 'next/image'

const Chatbox = () => {
  return (
    <div className='fixed bottom-4 right-4'>
        <div className='flex gap-4 felx-col'>
            <div className='flex gap-0 flex-row items-end'>
                <div className='p-1 pt-1.5 w-9 h-9 bg-white rounded-sm shadow-black shadow-md'>
                <Image 
                    src="/images/user1.jpeg"
                    width={33}
                    height={33}
                    alt="user"
                    style={{ borderRadius: '50%' }}
                />
                </div>
                <div className='w-72 h-auto p-2 bg-white rounded-md shadow-black shadow-md'>
                    <div className='flex justify-between text-xs text-gray-400'>
                        <p>Customer Support</p>
                        <p>38 minutes ago</p>
                    </div>
                    <div className='text-sm'></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Chatbox
