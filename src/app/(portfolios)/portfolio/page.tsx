
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-full md:overflow-hidden w-full m-0'>
      <div className='h-full md:h-screen w-full md:w-3/5 bg-gradient-to-tr from-[#8cc63e] to-[#24a8e0] px-10 md:px-28 py-5 text-white'>
        <Link href="/">
            <p className='mt-6 text-sm'>workstory.io</p>
        </Link>
        <h2 className='text-xl md:text-2xl font-semibold my-6 mb-10'>CREATE YOUR WORKSTORY</h2>
        <p className='text-xs md:text-sm mb-6'>
          Don&apos;t let your skills and talents go unnoticed! Take the first step towards your dream career by signing up for our platform today. With our user-friendly interface, you can easily create and share videos that highlight your unique abilities and catch the attention of potential recruiters.
        </p>
        <div className='flex justify-center items-center '>
          <Image
            className='text-center mx-auto md:-mt-16'
            src='/images/login-image.png'
            alt='login image'
            width={600}
            height={600}
            sizes='(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33vw'
            // style={{ objectFit: 'cover' }}
            // objectFit='contain'
          />
        </div>
      </div>
      <div className='h-full md:h-screen my-10 md:my-0 w-full md:w-2/5 relative'>
        <div className='bg-gray-200 rounded-lg p-2 text-gray-400 text-xs md:text-base text-center w-16 md:w-20 absolute top-5 right-5'>beta</div>
        <div className='flex justify-center items-center flex-col h-full'>
          <p className='text-xs md:text-base my-2 text-gray-400'>Welcome to</p>
          <Image 
            className='my-5 w-full max-w-xs md:max-w-sm lg:max-w-md' // Tailwind classes to control the max width at different breakpoints
            src='/images/logoname.png'
            alt='company name'
            width={620}
            height={36}
            sizes='(max-width: 720px) 60vw, (max-width: 468px) 40vw, 20vw'
            // style={{ objectFit: 'cover' }}
            // objectFit='contain'
          />

          <Link href='#' className='py-2 my-2 px-5 bg-[#8cc63e] text-white text-xs md:text-sm rounded-sm shadow-sm shadow-gray-600'>CONTINUE AS CANDIDATE</Link>
          <p className='my-3 text-xs md:text-sm'>OR</p>
          <Link href='#' className='py-2 my-2 px-5 bg-[#24a8e0] text-white text-xs md:text-sm rounded-sm shadow-sm shadow-gray-600'>CONTINUE AS RECRUITER</Link>
        </div>
      </div>
    </div>
  )
}

export default page
