

"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import According from './Footer lib/Accordian';
import logo from '../../public/images/icons/hostzer-logo.png';
import visa from '../../public/images/icons/visa.png';
import jbc from '../../public/images/icons/jcb.png';
import masterCart from '../../public/images/icons/master-card.png';
import paypal from '../../public/images/icons/paypal.png';
import rightArrow from '../../public/images/icons/icons8-arrow-right-50.png';
import facebook from '../../public/images/icons/icons8-facebook-50.png'
import instagran from '../../public/images/icons/icons8-instagram-50.png';
import linkdin from '../../public/images/icons/icons8-linkedin-50.png';

export default function Footer() {
    
                const items = [{
                id: 1,
                title: 'What types of hosting plans does Hostzer offer?',
                image: '/images/icons/icons8-arrow-down-50.png',
                image1: '/images/icons/icons8-arrow-up-20.png',
                content: 'Hostzer offers a variety of hosting plans including Shared Hosting, VPS Hosting, WordPress Hosting, Email Hosting, and eCommerce Hosting. Each plan is designed to meet the specific needs of different types of websites and applications.'
            }, {
                id: 2,
                title: "How reliable is Hostzer's hosting service?",
                image: '/images/icons/icons8-arrow-down-50.png',
                image1: '/images/icons/icons8-arrow-up-20.png',
                content: "Hostzer ensures high reliability with a guaranteed 99.9% uptime. Our advanced data centers, redundant infrastructure, and proactive monitoring systems ensure that your website remains online and performs optimally at all times."
            },{ 
                id: 3, 
                title: 'What kind of customer support does Hostzer provide?', 
                image: '/images/icons/icons8-arrow-down-50.png',
                image1: '/images/icons/icons8-arrow-up-20.png',
                content: "Hostzer provides 24/7 customer support through live chat, email, and phone. Our expert support team is always available to assist you with any issues or questions, ensuring you have a smooth and trouble-free hosting experience."
            },{
                id: 4,
                title: 'Can I easily upgrade my hosting plan with Hostzer?', 
                image: '/images/icons/icons8-arrow-down-50.png',
                image1: '/images/icons/icons8-arrow-up-20.png',
                content: "Absolutely! Hostzer offers flexible plans that can be easily upgraded as your website grows. Whether you need more resources or advanced features, our team can help you upgrade your plan seamlessly without any downtime."
            },{ 
                id: 5,
                title: "How does Hostzer protect my website?",
                image: '/images/icons/icons8-arrow-down-50.png',
                image1: '/images/icons/icons8-arrow-up-20.png',
                content: "Hostzer employs robust security measures including regular backups, DDoS protection, SSL certificates, firewalls, and malware scanning. Our priority is to keep your data secure and your website protected from any potential threats."
            },{ 
                id: 6,
                title: "How does Hostzer handle website migrations?",
                image: '/images/icons/icons8-arrow-down-50.png',
                image1: '/images/icons/icons8-arrow-up-20.png',
                content: "Hostzer offers free website migration services to help you transfer your website to our platform smoothly. Our experienced team manages the entire migration process, ensuring there is minimal downtime and no data loss. We provide comprehensive support and guidance throughout the transition."
            }]


            
       
            
  return (
    <>
    <footer className='px-5'>
         <div>
            <According 
            items={items}/>
         </div>

         <div className=' pt-20 w-full px-4 md:px-10 lg:flex lg:flex-row gap-7 lg:justify-center items-start '>
            <div className='max-w-[750px]'>

                <Image
                alt='error'
                src={logo}
                width={200}
                height={200}
                />

               <p className='text-gray-500 pt-5 lg:max-w-[300px] lg:text-sm'>
               Welcome to Hostzer, your reliable web hosting partner with round-the-clock customer support. Whether you're an individual or a corporation, we offer top-tier hosting solutions tailored to your needs. Our global data centers guarantee your website's uptime. Choose from shared hosting or VPS hosting. Enjoy seamless hosting experiences with Hostzer.</p>

                <h3 className='text-xl font-semibold font-sans text-black py-5'>We Accept</h3>

                <div className='flex gap-3'>
                    <Image
                    alt='error'
                    src={visa}
                    width={75}
                    className=''
                    />

                    <Image
                    alt='error'
                    src={masterCart}
                    width={75}
                    className=''
                    />

                    <Image
                    alt='error'
                    src={jbc}
                    width={75}
                    className=''
                    />

                    <Image
                    alt='error'
                    src={paypal}
                    width={75}
                    className=''
                    />      
                </div>

            </div>
            <div className='pt-5 pb-5 '>
                <h3 className=' text-black font-bold text-lg'>Hosting</h3>
                <p className='text-gray-600 font-sans  py-1 '>Web Hosting</p>
                <p className='text-gray-600 font-sans  py-1'>VPS Hosting</p>
                <p className='text-gray-600 font-sans  py-1'>WordPress Hosting</p>
                <p className='text-gray-600 font-sans  py-1'>Email Hosting</p>
                <p className='text-gray-600 font-sans  py-1'>Eommerce Hosting</p>
            </div>
            <div className=' pb-5 lg:pt-5'>
                <h3 className=' text-black font-bold text-lg'>Company</h3>
                <p className='text-gray-600 font-sans  py-1'>About</p>
                <p className='text-gray-600 font-sans  py-1'>Blogs</p>
                <p className='text-gray-600 font-sans  py-1'>Career</p>
                
            </div>

            <div className=' pb-5  lg:pt-5'>
                <h3 className=' text-black font-bold text-lg'>Newsletter</h3>
                <p className='text-gray-600 font-sans  text-sm py-1 '>Signup for our newsletter to get the latest news in your inbox.</p>
                
                <div className='flex items-center'>
                <input
                type='email'
                id='email'
                className='py-1 px-4  w-full max-w-[500px] bg-gray-200  rounded-l-full focus:bg-white  mt-5'
                placeholder='enter your email'
                />
                <button className='items-center mt-auto'>
                <Image
                alt='error'
                src={rightArrow}
                width={30}
                height={10}
                className='bg-sky-700 mt-auto h-8 w-14 px-3 rounded-r-full'
                />
                </button>
                </div>
                <p className='text-gray-600 font-sans text-sm  py-5 '>Your email is safe with us. We don't spam</p>
                <h3 className=' text-black font-bold text-lg py-5'>Follow Us on</h3>
                <div className='flex gap-3'>
                    <Image
                    alt='error'
                    src={facebook}
                    width={30}
                    className=' cursor-pointer'
                    />
                    <Image
                    alt='error'
                    src={instagran}
                    width={30}
                    className=' cursor-pointer'
                    />
                    <Image
                    alt='error'
                    src={linkdin}
                    width={30}
                    className=' cursor-pointer'
                    />

                    
                </div>
            </div>
         </div>

         

    </footer>
    
    <div className='border-t-2  px-5  md:pl-20 lg:flex lg:justify-between pt-5 pb-2 lg:px-10 mt-5'>
            <div  className='text-gray-600 font-thin font-sans tracking-tight '>
                <p className='pt-3'>Copyright 2024 - Powered by hostzer.net</p>
            </div>
            <div className='flex justify-between w-[250px] text-gray-600 font-sans mt-1 pb-3'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
         </div>
    </>
  )
}
