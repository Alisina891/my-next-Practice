"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import RightArrow from '../../public/images/icons/icons8-arrow-right-50.png';
import boyPhoto from '../../public/images/icons/man-smile.png'



export default function Header() {
    const [visible , setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 800);
    })

  return (
    <>
    <header className=' relative  text-black pt-[150px] px-5 lg:flex lg:px-12 z-10'>
        <div className='sm:ml-16 md:ml-20 lg:ml-0 lg:mt-10'>
            <h1 className='text-5xl font-semibold max-w-[750px] space-x-2 leading-tight lg:tracking-tight
             '>Partner with the Leading <span className='text-sky-700'> Hosting Provider</span> in Afghanistan</h1>
             <p className='mt-3 text-gray-500 max-w-[450px]' >Experience high-performance, secure hosting for your website.
             Never lose clients due to slow hosting speeds again.</p>
             <div className='flex items-center'>
             <input 
             type='text'
             placeholder='enter domain name'
             className=' relative w-full max-w-[500px] mt-5  pl-5 py-3 px-4 rounded rounded-l-full placeholder:text-xl' 
             />
             <div className='mt-auto bg-sky-700 rounded-r-full px-4 '>
             <Image
             alt='error'
             src={RightArrow}
             width={30}
             className="mt-auto bg py-[9px] "
             />
             </div>
             </div>
             <p className='text-gray-500 mt-3 font-sans'>Reserve your domain today before someone takes it.</p>
             <div className='flex gap-5 mt-3 md:gap-9'>
                <div>
                    <p className='text-sky-700 font-bold'>.Com</p>
                    <p className='text-xs font-semibold'>$4.99/year</p>
                </div>
                <div>
                    <p className='text-sky-700 font-bold'>.net</p>
                    <p className='text-xs font-semibold'>$3.99/year</p>
                </div>
                <div>
                    <p className='text-sky-700 font-bold'>.co</p>
                    <p className='text-xs font-semibold'>$2.99/year</p>
                </div>
                <div>
                    <p className='text-sky-700 font-bold'>.info</p>
                    <p className='text-xs font-semibold'>$3.90/year</p>
                </div>
                <div>
                    <p className='text-sky-700 font-bold'>.biz</p>
                    <p className='text-xs font-semibold'>$4.99/year</p>
                </div>
             </div>
        </div>
        <div className='relative flex items-center justify-center max-lg:mt-10 lg:-mt-6 '>
            <Image 
            className='relative w-[480px] lg:w-[700px]'
            alt='error'
            src={boyPhoto}
            />
            <div className={` absolute top-0 left-0 mt-28 bg-white px-5 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center ml-5 md:ml-16 lg:ml-5 transition-opacity  duration-0 ${visible ? "opacity-100" : "opacity-0"}`}>
                <p className='text-sky-700 font-bold text-2xl'>15425</p>
                <p className='text-sm font-sans '>Website Powered</p>
            </div>
            <div className={` absolute top-0 right-0 mt-36 bg-white px-5 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center mr-8 transition-opacity  duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
                <p className='text-sky-700 font-bold text-2xl'>99.99%</p>
                <p className='text-sm font-sans '>Uptime</p>
            </div>
            <div className={` absolute bottom-0 mb-28 bg-white px-5 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center mr-16 transition-opacity  duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                <p className='text-sky-700 font-bold text-2xl'>15 Years</p>
                <p className='text-sm font-sans '>Experience</p>
            </div>
        </div>
        
    </header>
    <div className=" opacity-20 inset-0 absolute bg-[url('/images/simple-blue-white-background-with-text-space.jpg')] bg-contain bg-center w-full h-full flex items-center justify-center bg-repeat"></div>
    </>
  )
}
