'use client'
import React, { useRef } from 'react';
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Fix: Define the ref with the correct type
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_oyq9anr', 'template_ho113gx', form.current, {
          publicKey: 'OoMGmLHFobaWCpW6H',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current?.reset(); // Reset the form if the request succeeds
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <div className='w-full flex justify-center items-center flex-col md:flex-none md:justify-start md:items-start md:relative'>
      <div className='flex flex-col justify-center text-center items-center md:flex-none md:text-left md:items-start pt-8 md:pt-[80px] px-5 md:px-72 pb-8 md:pb-[250px]'>
        <p className='font-semibold text-xl text-[#8cc63e]'>Contact Us</p>
        <h3 className='text-5xl font-semibold mt-3'>Get in Touch</h3>
        <div className='w-20 h-1 bg-[#24a8e0] mt-5'></div>
        <div className='mt-8 flex flex-col justify-center'>
            <div className='mt-6 flex flex-col justify-cente md:inline-flex md:justify-left md:flex-row items-center'>
                <div className='w-14 h-14 mb-6 md:mb-0 md:mt-1 rounded-full flex justify-center items-center bg-[#8cc63e] text-white text-4xl'><MdPhone /></div>
                <div className='md:ml-8'>
                    <p className='font-bold text-xl'>Call</p>
                    <p className='text-gray-500'>+1-408-579-9990</p>
                </div>
            </div>
            <div className='mt-6 flex flex-col justify-cente md:inline-flex md:justify-left md:flex-row items-center'>
                <div className='w-14 h-14 mb-6 md:mb-0 md:mt-1 rounded-full flex justify-center items-center bg-[#8cc63e] text-white text-4xl'><HiOutlineMail /></div>
                <div className='md:ml-8'>
                    <p className='font-bold text-xl'>Email</p>
                    <p className='text-gray-500'>info@workstory.io</p>
                </div>
            </div>
        </div>
      </div>
      <div className='my-6 px-4 w-full mx-auto'>
        <div className='bg-white w-full md:w-[600px] rounded-xl border border-gray-200 shadow-md  md:absolute md:top-40 md:right-36'>
            <form ref={form} onSubmit={sendEmail} className='p-5 w-full md:p-10'>
                <h4 className='text-xl md:text-2xl font-semibold'>Fill the Form below</h4>
                <div className='flex w-full gap-x-2 md:gap-x-5 my-3'>
                    <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Name</label>
                        <input type="text" id="name" name='name' className="border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:border-blue-500 block w-full p-2.5 " placeholder="Your Name" required />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Email</label>
                        <input type="email" id="email" name='email' className="border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email" required />
                    </div>
                </div>
                <div className="my-3">
                    <label htmlFor="phone" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Phone</label>
                    <input type="number" id="phone" name='phone' className="border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:border-blue-500 block w-full p-2.5 " placeholder="Your Phone" required />
                </div>
                <div className="my-3">
                    <label htmlFor="website" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Company Website</label>
                    <input type="website" id="website" name='website' className="border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:border-blue-500 block w-full p-2.5 " placeholder="Your Company Website" required />
                </div>
                <div className="my-3">
                    <label htmlFor="message" className="block mb-2 text-sm md:text-base font-medium text-gray-900">Please share anything that will help us prepare for our call</label>
                    <textarea id="message" name='message' rows={4} className="block p-2.5 w-full text-sm md:text-base text-gray-900 rounded-lg border border-gray-300 focus:border-blue-500" placeholder="Enter Your Message"></textarea>

                </div>
                <button type="submit" className="text-white w-full bg-[#8cc63e] focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-base my-3 px-5 py-3 text-center">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
