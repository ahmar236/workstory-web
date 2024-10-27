import React from 'react'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className='w-full m-0 h-[360px] md:h-[400px] bg-no-repeat bg-cover bg-center relative mt-20'
      style={{ backgroundImage: "url('/contact/pricing.jpg')" }}>
        <div className='bg-slate-600 bg-opacity-70 absolute w-full h-[360px] md:h-[400px] top-0 left-0 py-20 pl-12 md:pl-72'>
          <div className='mt-14 md:mt-22 text-white'>
            <h3 className='text-5xl'>Pricing</h3>
            <div className='w-20 h-1 bg-[#24a8e0] mt-5'></div>
            <p className='mt-3 font-light text-lg'></p>
            <div className='mt-10  inline-flex items-center'>
              <Link className='inline-flex items-center gap-6 text-base text-[#8cc63e]' href='/'>Home <MdKeyboardDoubleArrowRight /></Link>
              <p className='text-base ml-5'>Pricing</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
