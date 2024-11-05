'use client'
import React, { useEffect, useState, useRef } from 'react';

const Timeline = () => {
  const [scrolledStates, setScrolledStates] = useState<boolean[]>([false, false, false, false, false, false, false]);
  const [barHeight, setBarHeight] = useState<number>(0);

  const itemRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newScrolledStates = itemRefs.map((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return rect.top < window.innerHeight - 300;
        }
        return false;
      });
      setScrolledStates(newScrolledStates);

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = window.scrollY / maxScroll;
      const newHeight = Math.min(100, scrollProgress * 100);
      setBarHeight(newHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getBarColor = () => {
    return 'bg-[#8cc63e]';
  };

  return (
    <div className='relative grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-14 gap-4 md:gap-y-7 mx-auto w-full md:w-5/6 my-8 bg-white opacity-90 p-4 md:p-10'>

      {/* First Item */}
      <div ref={itemRefs[0]} className={`p-3 md:p-8 pb-4 md:pb-10 bg-opacity-40 border border-gray-300 ${scrolledStates[0] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'} hover:bg-[#8cc63e] w-full text-center relative`}>
        <h3 className='text-lg md:text-2xl my-4 leading-none text-gray-700'>Introduce yourself with a Work Story video</h3>
        <p className='text-xs md:text-md font-extralight text-gray-600'>It&apos;s a good idea to write what you&apos;re going to say before recording</p>
        <div className='absolute -left-12 top-14 md:left-auto md:-right-10 md:top-6 flex justify-center items-center'>
          <div className={`w-5 h-5 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[0] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'}`}></div>
          {/* <div className={`w-4 h-4 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[0] ? 'bg-[#8cc63e]' : 'bg-gray-400'}`}></div> */}
        </div>
      </div>

      <div className='h-0 md:h-1'></div>
      <div className='h-0 md:h-1'></div>

      {/* Second Item */}
      <div ref={itemRefs[1]} className={`p-3 md:p-8 pb-4 md:pb-10 bg-opacity-40 border border-gray-300 ${scrolledStates[1] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'} hover:bg-[#8cc63e] w-full text-center relative`}>
        <h3 className='text-lg md:text-2xl my-4 leading-none text-gray-700'>Create Work Story videos to describe each major accomplishment</h3>
        <p className='text-xs md:text-md font-extralight text-gray-600'>These are the stories that will get the hiring manager&apos;s attention</p>
        <div className='absolute -left-12 top-14 md:-left-10 md:top-6 flex justify-center items-center'>
          <div className={`w-5 h-5 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[1] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'}`}></div>
          {/* <div className={`w-4 h-4 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[1] ? 'bg-[#8cc63e]' : 'bg-gray-400'}`}></div> */}
        </div>
      </div>

      <div className='h-0 md:h-1'></div>
      <div className='h-0 md:h-1'></div>

      {/* Third Item */}
      <div ref={itemRefs[2]} className={`p-3 md:p-8 pb-4 md:pb-10 bg-opacity-40 border border-gray-300 ${scrolledStates[2] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'} hover:bg-[#8cc63e] w-full text-center relative`}>
        <h3 className='text-lg md:text-2xl my-4 leading-none text-gray-700'>Upload your resume</h3>
        <p className='text-xs md:text-md font-extralight text-gray-600'>You can upload multiple resumes if you want</p>
        <div className='absolute -left-12 top-14 md:left-auto md:-right-10 md:top-6 flex justify-center items-center'>
          <div className={`w-5 h-5 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[2] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'}`}></div>
          {/* <div className={`w-4 h-4 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[2] ? 'bg-[#8cc63e]' : 'bg-gray-400'}`}></div> */}
        </div>
      </div>

      <div className='h-0 md:h-1'></div>
      <div className='h-0 md:h-1'></div>

      {/* Fourth Item */}
      <div ref={itemRefs[3]} className={`p-3 md:p-8 pb-4 md:pb-10 bg-opacity-40 border border-gray-300 ${scrolledStates[3] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'} hover:bg-[#8cc63e] w-full text-center relative`}>
        <h3 className='text-lg md:text-2xl my-4 leading-none text-gray-700'>Share your Work Story links</h3>
        <p className='text-xs md:text-md font-extralight text-gray-600'>Add your Work Story URLs to your resume and cover letter</p>
        <div className='absolute -left-12 top-14 md:-left-10 md:top-6 flex justify-center items-center'>
          <div className={`w-5 h-5 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[3] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'}`}></div>
          {/* <div className={`w-4 h-4 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[3] ? 'bg-[#8cc63e]' : 'bg-gray-400'}`}></div> */}
        </div>
      </div>
      <div className='h-0 md:h-1'></div>
      <div className='h-0 md:h-1'></div>

      {/* Fifth Item */}
      <div ref={itemRefs[4]} className={`p-3 md:p-8 pb-4 md:pb-10 bg-opacity-40 border border-gray-300 ${scrolledStates[0] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'} hover:bg-[#8cc63e] w-full text-center relative`}>
        <h3 className='text-lg md:text-2xl my-4 leading-none text-gray-700'>Apply for jobs</h3>
        <p className='text-xs md:text-md font-extralight text-gray-600'>Use LinkedIn, Indeed, and other job boards to apply for jobs</p>
        <div className='absolute -left-12 top-14 md:left-auto md:-right-10 md:top-6 flex justify-center items-center'>
          <div className={`w-5 h-5 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[4] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'}`}></div>
          {/* <div className={`w-4 h-4 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[4] ? 'bg-[#8cc63e]' : 'bg-gray-400'}`}></div> */}
        </div>
      </div>

      <div className='h-0 md:h-1'></div>
      <div className='h-0 md:h-1'></div>

      {/* Sixth Item */}
      <div ref={itemRefs[5]} className={`p-3 md:p-8 pb-4 md:pb-10 bg-opacity-40 border border-gray-300 ${scrolledStates[3] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'} hover:bg-[#8cc63e] w-full text-center relative`}>
        <h3 className='text-lg md:text-2xl my-4 leading-none text-gray-700'>Send messages to hiring managers</h3>
        <p className='text-xs md:text-md font-extralight text-gray-600'>Send LinkedIn messages to hiring managers and share your Work Story URL</p>
        <div className='absolute -left-12 top-14 md:-left-10 md:top-6 flex justify-center items-center'>
          <div className={`w-5 h-5 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[5] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'}`}></div>
          {/* <div className={`w-4 h-4 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[5] ? 'bg-[#8cc63e]' : 'bg-gray-400'}`}></div> */}
        </div>
      </div>

      <div className='h-0 md:h-1'></div>
      <div className='h-0 md:h-1'></div>

      {/* Seventh Item */}
      <div ref={itemRefs[6]} className={`p-3 md:p-8 pb-4 md:pb-10 bg-opacity-40 border border-gray-300 ${scrolledStates[6] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'} w-full text-center relative`}>
        <h3 className='text-lg md:text-2xl my-4 leading-none text-gray-700'>Let recruiters find you</h3>
        <p className='text-xs md:text-md font-extralight text-gray-600'>Ensure your profile is visible to recruiters</p>
        <div className='absolute -left-12 top-14 md:left-auto md:-right-10 md:top-6 flex justify-center items-center'>
          <div className={`w-5 h-5 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[6] ? 'bg-[#8cc63e]' : 'bg-[#24a8e0]'}`}></div>
          {/* <div className={`w-4 h-4 rounded-full ring-2 border-white border-2 outline-none ring-gray-200 ${scrolledStates[6] ? 'bg-[#8cc63e]' : 'bg-gray-400'}`}></div> */}
        </div>
      </div>

      {/* Progress bar */}
      <div className='absolute inset-0 flex md:justify-center md:justify-start items-start -z-10'>
        <div className={`w-1 rounded-full transition-all duration-300 ${getBarColor()}`} style={{ height: `${barHeight}%` }}></div>
      </div>
    </div>
  );
};

export default Timeline;
