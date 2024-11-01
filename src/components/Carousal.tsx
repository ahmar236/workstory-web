// components/Carousel.js
'use client'
import React, { useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

const slides = [
  {
    image: '/carousal/we-are-hiring.jpg',
    heading: 'RECRUIT FASTER',
    text1: 'Browse candidates\' work stories',
    text2: 'Utilize video based Questions & Answers',
    text3: '',
    button: 'SHARE YOUR WORK STORY',
  },
  {
    image: '/carousal/job-search.jpg',
    heading: '46% OF NEW HIRES FAIL WITHIN 18 MONTHS',
    text1: 'Hiring the wrong candidate is very expensive',
    text2: 'The Cost of a Bad Hire can reach upto 30% of the first year salary',
    text3: '',
    button: 'I WANT MORE JOB INTERVIEWS',
  },
  {
    image: '/carousal/interview.jpg',
    heading: 'BRING YOUR WORKSTORY TO LIFE',
    text1: 'Introduce yourself to the employers at the start of the journey',
    text2: 'Showcase your skills, accomplishments and achievements',
    text3: 'Create professional videos with easy-to-use tools',
    button: 'CREATE YOUR WORK STORY',
  },
  {
    image: '/carousal/job-received.jpg',
    heading: 'ELIMINATE FALSE POSITIVES',
    text1: 'Video retention is 9.5 times more effective than Text',
    text2: '',
    text3: '',
    button: 'CREATE YOUR WORK STORY',
  },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }, []);
  
    const goToSlide = (index:number) => {
      setCurrentIndex(index);
    };

  return (
    <div className="relative container align-top w-full h-auto md:h-[560px] block mx-auto md:mx-36 bg-white bg-opacity-90 my-10 md:my-20 text-center md:text-left overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex flex-col-reverse md:flex-row justify-start md:justify-center items-start md:items-center gap-5 text-center md:text-left md:gap-30 h-auto md:h-[520px] flex-shrink-0 mx-auto">
            <div className="flex flex-col justify-center align-center items-center md:items-start h-auto w-full md:w-[640px] p-8 md:p-10">
              <h2 className="text-base md:text-2xl lg:text-4xl md:font-bold mb-2 md:mb-6">{slide.heading}</h2>
              <div className='h-0.5 md:h-1 w-28 mb-2 md:mb-10 bg-[#eca30b]'></div>
              <div className='w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#009368] text-white text-center text-base md:text-xl p-0'><TiTick /></div>
              <p className="text-center md:text-left font-normal mt-2 text-[10px] md:text-base mb-2 md:mb-6">{slide.text1}</p>
              {slide.text2 && (
                <>
                  <div className='w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#009368] text-white text-center text-base md:text-xl p-0'><TiTick /></div>
                  <p className="text-center md:text-left font-normal mt-2 text-[10px] md:text-base mb-2 md:mb-6">{slide.text2}</p>
                </>
              )}
              {slide.text3 && (
                <>
                  <div className='w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#009368] text-white text-center text-base md:text-xl p-0'><TiTick /></div>
                  <p className="text-center md:text-left font-normal mt-2 text-[10px] md:text-base mb-2 md:mb-6">{slide.text3}</p>
                </>
              )}
              <Link href='#' className='px-8 py-3 bg-[#8cc63f] text-white text-xs md:text-sm w-60 md:w-80 text-center rounded-2xl mt-2 md:mt-6'>{slide.button}</Link>
            </div>
            <div className='w-[250px] md:w-[420px] h-[250px] md:h-[420px] mt-20 md:mt-8 rounded-full mx-auto overflow-hidden shadow-md shadow-gray-600 relative'>
              <Image 
                src={slide.image} 
                alt={slide.heading} 
                layout="fill" 
                // width={620} 
                // height={620}
                objectFit='cover'
                className="hover:scale-110 delay-200" 
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 md:bottom-4 left-0 right-0 mx-auto flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 md:w-3 h-2 md:h-3 m-1 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
