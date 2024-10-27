import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='w-full h-40 lg:h-64 py-8 md:py-12 bg-[#f6f5ff] text-center flex-col lg:flex-row flex flex-wrap items-center justify-between mx-auto px-20 lg:px-56 p-6 text-sm lg:text-lg font-medium'>
        <div>
          <Link href='/'>
            <Image 
              src="/images/logoname.png" 
              className="h-9" 
              alt="Work Story Name" 
              width={170} // Adjust width as needed
              height={36} // Adjust height as needed
            />
          </Link>
        </div>

        <div>
          <span className='mx-6'>
            <Link href='/pricing'>Pricing</Link>
          </span>
          
          <span className='mx-6'>
            <Link href='/support'>Support</Link>
          </span>
          
          <span className='mx-6'>
            <Link href='/portfolio'>Login</Link>
          </span>
        </div>
      </div>
      <div className='h-16 w-full bg-white px-20 lg:px-56 py-6 flex justify-between'>
        <div>
          <p className='font-thin lg:font-regular text-xs lg:text-sm'>© 2023 WorkStory.io. All Rights Reserved.</p>
        </div>
        <div className="flex gap-3 text-sm md:gap-8 lg:text-lg md:px-4">
          <Link href='#'>
            <FaInstagram className='hover:scale-125 duration-150'/>
          </Link>
          <Link href='#'>
            <FaFacebookF className='hover:scale-125 duration-150' />
          </Link>
          <Link href='#'>
            <FaTwitter className='hover:scale-125 duration-150' />
          </Link>
          <Link href='#'>
            <FaYoutube className='hover:scale-125 duration-150' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
