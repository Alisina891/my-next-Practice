"use client"
import React, { useState , useEffect}  from 'react';
import Image from 'next/image';
import InfiniteSlider from './InfiniteSlider';
import map from '../../public/images/icons/map.png'
import smilewmen from '../../public/images/icons/girl.png'



export default function Main() {
    const [isRight , setIsright] = useState(false);

    const moveButton = () => {
         setIsright((prev) => !prev);

    }


  return (
    <>
    <section className='px-4 '>
        <div className='flex flex-col justify-center items-center pt-5'>
            <p className='px-4 py-1 bg-gray-300 text-sky-700 rounded-full text-sm font-sans '>HOSTING PLAN</p>
            <h3 className='mt-5 text-4xl font-semibold text-black text-center '>Choose Perfect <span className='text-sky-700'>Web Hosting</span> Package For You</h3>
            <div className='flex text-sky-800 mt-9 gap-3'>
                <p className='text-gray-500 font-sans font-semibold text-lg'>Monthly Plan</p>
                <div className='flex  items-center justify-start pl-1  w-[49px] rounded-full bg-sky-700 '>
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-500 `}
                    style={{transform: isRight ? "translateX(20px)" : "translatex(0)" }}
                    onClick={moveButton}></div>
                </div>
                <p className='text-gray-500 font-sans font-semibold text-lg'>Yearly Plan</p>
            </div>
        </div>
        <div className=' flex flex-col justify-center items-center pt-10 text-black  lg:flex-row  xl:px-5 '>
            <div className='h-[800px] w-[450px] md:w-[650px] border px-10 pt-11 shadow-lg mt-5 xl:shadow-none'>
                <h3 className='font-bold text-xl '>Starter</h3>
                <p className='pt-2 text-gray-600 text-lg max-w-[200px]'>Ideal solution for beginners</p>
                <h2 className='font-semibold text-5xl font-sans  mt-8'>$3.59<span className='text-xl ml-1 font-bold'>/mo</span></h2>
                <p className='text-gray-600 mt-1'>Normally <span className=' line-through'>$9.99</span></p>
                <div className='flex w-full items-center justify-center'>
                <button className='w-full  bg-sky-700 text-white font-sans font-bold text-sm  mt-5 py-2 rounded-full' > Get Yearly Plan</button>
                </div>
                <p className='text-gray-500 text-sm mt-1'>Auto re-news at regular rate</p>

                <div className='mt-10'>
                    <p className=' text-lg  font-semibold'>Top Features</p>
                    <p className='text-gray-500 mt-1'>&#10003; 1 Wbsite</p>
                    <p className='text-gray-500 mt-1'>&#10003; 10 GB SSD Storage</p>
                    <p className='text-gray-500 mt-1'>&#10003; Custom Themes</p>
                    <p className='text-gray-500 mt-1'>&#10003; 24/7 Customer Support</p>

                </div>
                <div className='mt-10 pb-7'>
                    <p className=' text-lg  font-semibold'>Also Include</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free Domain-1year</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free CDN Included</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free SSL for the 1st year</p>

                </div>
                


            </div>

            <div className='mt-5 h-[800px] w-[450px] md:w-[650px] border px-10 pt-11 shadow-lg xl:shadow-none'>
                <h3 className='font-bold text-xl '>Plus</h3>
                <p className='pt-2 text-gray-600 text-lg'>For those need to running multiple sites.</p>
                <h2 className='font-semibold text-5xl font-sans  mt-8'>$5.59<span className='text-xl ml-1 font-bold'>/mo</span></h2>
                <p className='text-gray-600 mt-1'>Normally <span className=' line-through'>$15.99</span></p>
                <div className='flex w-full items-center justify-center'>
                <button className='w-full  bg-sky-700 text-white font-sans font-bold text-sm  mt-5 py-2 rounded-full' > Get Monthly Plan</button>
                </div>
                <p className='text-gray-500 text-sm mt-1'>Auto re-news at regular rate</p>

                <div className='mt-10'>
                    <p className=' text-lg  font-semibold'>Top Features</p>
                    <p className='text-gray-500 mt-1'>&#10003; Unlimited Websites</p>
                    <p className='text-gray-500 mt-1'>&#10003; 20 GB SSD Storage</p>
                    <p className='text-gray-500 mt-1'>&#10003; Custom Themes</p>
                    <p className='text-gray-500 mt-1'>&#10003; 24/7 Customer Support</p>

                </div>
                <div className='mt-10 pb-7'>
                    <p className=' text-lg  font-semibold'>Also Include</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free Domain-1year</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free CDN Included</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free SSL Certificate</p>

                </div>
                


            </div>

            <div className='relative h-[800px] w-[450px] md:w-[650px] border px-10 pt-11 shadow-lg mt-5 xl:shadow-none'>
                <p className=' absolute left-0 top-0 w-full py-1 bg-sky-500 font-semibold text-xl font-sans text-center text-white'>Recommended</p>
                <h3 className='font-bold text-xl '>Deluxe</h3>
                <p className='pt-2 text-gray-600 text-lg'>Unlimited sites with automated backup.</p>
                <h2 className='font-semibold text-5xl font-sans  mt-8'>$8.59<span className='text-xl ml-1 font-bold'>/mo</span></h2>
                <p className='text-gray-600 mt-1'>Normally <span className=' line-through'>$24.99</span></p>
                <div className='flex w-full items-center justify-center'>
                <button className='w-full  bg-sky-700 text-white font-sans font-bold text-sm  mt-5 py-2 rounded-full' > Get Monthly Plan</button>
                </div>
                <p className='text-gray-500 text-sm mt-1'>Auto re-news at regular rate</p>

                <div className='mt-10'>
                    <p className=' text-lg  font-semibold'>Top Features</p>
                    <p className='text-gray-500 mt-1'>&#10003; Unlimited Websites</p>
                    <p className='text-gray-500 mt-1'>&#10003; 40 GB SSD Storage</p>
                    <p className='text-gray-500 mt-1'>&#10003; Custom Themes</p>
                    <p className='text-gray-500 mt-1'>&#10003; 24/7 Customer Support</p>

                </div>
                <div className='mt-10 pb-7'>
                    <p className=' text-lg  font-semibold'>Also Include</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free Domain-1year</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free CDN Included</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free SSL  Certificate</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free Domain Privacy</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free automated backup</p>

                </div>
                


            </div>
            <div className='h-[800px] w-[450px] md:w-[650px] border px-10 pt-11 shadow-lg mt-5 xl:shadow-none'>
                <h3 className='font-bold text-xl '>Ultimate</h3>
                <p className='pt-2 text-gray-600 text-lg'>Best performance with optimized CPU resources</p>
                <h2 className='font-semibold text-5xl font-sans  mt-8'>$15.59<span className='text-xl ml-1 font-bold'>/mo</span></h2>
                <p className='text-gray-600 mt-1'>Normally <span className=' line-through'>$36.99</span></p>
                <div className='flex w-full items-center justify-center'>
                <button className='w-full  bg-sky-700 text-white font-sans font-bold text-sm  mt-5 py-2 rounded-full' > Get Monthly Plan</button>
                </div>
                <p className='text-gray-500 text-sm mt-1'>Auto re-news at regular rate</p>

                <div className='mt-10'>
                    <p className=' text-lg  font-semibold'>Top Features</p>
                    <p className='text-gray-500 mt-1'>&#10003; Unlimited Websites</p>
                    <p className='text-gray-500 mt-1'>&#10003; 100 GB SSD Storage</p>
                    <p className='text-gray-500 mt-1'>&#10003; Custom Themes</p>
                    <p className='text-gray-500 mt-1'>&#10003; 24/7 Customer Support</p>
                    <p className='text-gray-500 mt-1'>&#10003; Optimized CPU resources</p>

                </div>
                <div className='mt-10 pb-7'>
                    <p className=' text-lg  font-semibold'>Also Include</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free Domain-1year</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free CDN Included</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free SSL  Certificate</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free Domain Privacy</p>
                    <p className='text-gray-500 mt-1'>&#10003; Free automated backup</p>
                    <p className='text-gray-500 mt-1'>&#10003; Fee Dedicated</p>


                </div>
                


            </div>
        </div>
        <InfiniteSlider />
        <div className='w-full p-10 flex flex-col justify-center items-center '>
        <p className='px-4 py-1 bg-gray-300 text-sky-700 rounded-full text-sm font-sans '>DISCOVER</p>
        <h3 className='text text-black text-[40px] mt-5  font-bold'>Server Location</h3>
        <p className='text-gray-500 text-xl text-center max-w-[550px]'>Global reach, local performance: accelerate your website's speed and user experience with strategic server locations worldwide</p>
        </div>
        <div className=' relative flex w-full items-center justify-center'>
            <Image
            alt='error'
            src={map}
            width={1000}
            height={300}
            className='relative px-10'
            />

            <div className=' absolute flex gap-2 justify-center items-center lg:pb-[270px]  lg:ml-32 pb-28 pl-24 '>
                <div className=' w-3 h-3 bg-blue-500 rounded-full shadow-glow  '></div>
                <p className='px-2 text-xs font-bold bg-white text-black rounded-full py-1'>Sweden</p>
                
            </div>
           


        </div>

        <div className='w-full p-10 flex flex-col justify-center items-center'>
        <p className='px-4 py-1 bg-gray-300 text-sky-700 rounded-full text-sm font-sans '>EASY STEPS</p>
        <h3 className='text text-black text-[40px] mt-5  font-bold'>How It Works</h3>
        <p className='text-gray-500 text-xl text-center '>Easy hosting made simple: streamlined steps for seamless website setup and management.</p>
        </div>
        <div className='flex flex-col  px-3 sm:px-10  lg:flex-row lg:gap-20 pb-20 '  >
            <div className='flex  items-start justify-start text-start gap-3 text-black mt-5 lg:flex-col  ' >
                <p className=' text-white font-bold py-2 px-4 rounded-lg bg-sky-700 text-center content-center border-l-gray-700 mb-5' >1</p>
                <div className='flex-col  '>
                    <h3 className='text-2xl font-semibold'>
                        Select Plan
                    </h3>
                    <p className='max-sm:max-w-[400px] max-lg:min-w-[350px] text-gray-400 mt-2 md:w-[700px] lg:max-w-[200px] '>Selecting the right hosting plan for the success of your website. Tailored to meet your specific needs.</p>
                </div>
                
            </div>
            <div className='flex  items-start justify-start text-start gap-3 text-black mt-5 lg:flex-col'>
                <p className='text-white font-bold py-2 px-4 rounded-lg bg-sky-700 text-center content-center border border-l-2 border-l-gray-700 mb-5' >2</p>
                <div className='flex-col '>
                    <h3 className='text-2xl font-semibold'>
                        Choose Domain
                    </h3>
                    <p className='max-sm:max-w-[400px] text-gray-400 mt-2 md:w-[700px] max-lg:min-w-[350px] lg:max-w-[200px]  '>Choose a domain name that reflects your website's purpose, content, or the nature of your business.</p>
                </div>
                
            </div>
            <div className='flex  items-start justify-start text-start gap-3 text-black mt-5 lg:flex-col'>
                <p className='text-white font-bold py-2 px-4 rounded-lg bg-sky-700 text-center content-center border border-l-2 border-l-gray-700 mb-5' >3</p>
                <div className='flex-col '>
                    <h3 className='text-2xl font-semibold'>
                    Login/Register
                    </h3>
                    <p className='max-sm:max-w-[400px] text-gray-400 mt-2 md:w-[700px] max-lg:min-w-[350px] lg:max-w-[200px] '>Take the first step towards creating your website and reaching a wider audience by registering today.</p>
                </div>
                
            </div>
            <div className='flex  items-start justify-start text-start gap-3 text-black mt-5 lg:flex-col'>
                <p className='text-white font-bold py-2 px-4 rounded-lg bg-sky-700 text-center content-center border border-l-2 border-l-gray-700 mb-5' >4</p>
                <div className='flex-col '>
                    <h3 className='text-2xl font-semibold'>
                    Make Payment
                    </h3>
                    <p className='max-sm:max-w-[400px] md:max-w-[700px] text-gray-400 mt-2 max-lg:min-w-[350px] lg:max-w-[200px] '>We offer a variety of secure payment methods to make your payment process convenient and hassle-free.</p>
                </div>
                
            </div>
            
        </div>
    </section>

    <div className='lg:flex lg:flex-row  bg-sky-100  lg:gap-20 mt-10'>
            <div className='hidden lg:flex'>
                <Image
                src={smilewmen}
                width={700}
                height={400}
                alt='error'
                className='ml-20 -mt-20'

                />
            </div>
            <div className='w-full pt-5 flex flex-col pl-12 max-sm:pl-12 justify-center text-black max-sm:px-4  mt-20'>
                <p className='font-bold '>Stop worries, you'r convered with</p>
                <h2 className='text-4xl font-bold mt-4'><span className='text-sky-800 bg-gradient-to-r from-sky-800 via-sky-400 to-transparent bg-clip-text text-transparent tracking-tighter '>30 day<span className='text-sky-200'>s</span></span> money back guarantee</h2>
                <button className='  bg-sky-800 w-40 py-2 text-sm text-white font-bold rounded-full mt-5 '>Get Started</button>
                <p className='mt-4 text-gray-400 text-[14px] pb-5'>*Cancellation must be within a maximum of 30 days</p>
            </div>
        </div>
        <div className='w-full p-10 flex flex-col justify-center items-center'>
        <p className='px-4 py-1 bg-gray-300 text-sky-700 rounded-full text-sm font-sans '>DO YOU HAVE</p>
        <h3 className='text text-black text-[40px] mt-5  font-bold'>Any Questions?</h3>
        
       
        </div>
    </>
  )
}
