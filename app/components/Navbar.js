"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HostingHover from './nav lib/HostingHover'
import Hireapro from './nav lib/Hire a pro'
import calling from '../../public/images/icons/calling.png';
import email from '../../public/images/icons/email.png';
import logo from '../../public/images/icons/hostzer-logo.png';
import menu from '../../public/images/icons/menu.png';
import Menu from './nav lib/Menu'
import downArrow from '../../public/images/icons/icons8-arrow-down-24.png';

export default function Navbar() {
    const [isOpen , setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto'
        }
    }
    const [isHovered , setIsHovered] = useState(false)
    const [hovered , setHovered] = useState(false)

    const [bg , setBg] = useState("bg-transparent")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBg("bg-white shadow-md")
            } else {
                setBg("bg-transparent")
            }
        };

        window.addEventListener("scroll", handleScroll);
    },[])

  return (
    <>
    <div className='  relative inset-0 flex  justify-center z-20'
   >
    <HostingHover 
    isHovered={isHovered}
    setIsHovered={setIsHovered}/>
    </div>
    <div className=' relative inset-0 flex  justify-center z-20'>
    <Hireapro 
    hovered={hovered}
    setHovered={setHovered}/>
    </div>
    <nav className='fixed  top-0 right-0 w-full z-20 '>
        <div className=' bg-none'>
            <div className='flex justify-between px-12 bg-gray-200 text-black py-2 tracking-tight '>
                <div>
                    <p className=' hidden md:block tracking-tighter'>
                        Get Free Consultation
                    </p>
                </div>
                <div className='flex gap-5 text-blue-950 text-base font-sans'>
                    <div className='flex gap-2'>
                        
                        <button className='flex hover items-center gap-1 cursor-auto'><Image
                        className='mt-1'
                        src={calling}
                        alt='error'
                        width={18}
                        />+9378 003 1643</button>
                    </div>
                    <div className='flex gap-2'>
                         <button className='flex text-center items-center cursor-auto gap-1'>
                         <Image 
                         className='mt-1'
                        src={email}
                        alt='error'
                        width={18}
                        />alisinai902@gmail.com</button>
                    </div>
                </div>
            </div>
            <div className={`flex justify-between h-20 items-center lg:px-17 sm:px-10 px-5 ${bg}`}>
                <div>
                    <Image 
                    alt='error'
                    src={logo}
                    width={200}
                    className='mb-5'
                    />
                </div>
                <div className='flex gap-3 items-center sm:gap-7 '>
                <div className='hidden lg:flex  space-x-4 text-black font-semibold font-sans '>
                        <button>Home</button>
                        <div className='flex'>
                        <div className='flex'><button 
                        className='flex items-center gap-1'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setTimeout(() => setIsHovered(false), 200)}>Hosting
                         <Image
                            alt='error'
                            src={downArrow}
                            width={13}
                            className='mt-auto'

                            />
                        </button></div>
                        </div>
                        <button>Domain</button>
                        <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setTimeout(() => setHovered(false), 200)}
                        className='flex gap-1'>
                            Hire a Pro
                            <Image
                            alt='error'
                            src={downArrow}
                            width={13}
                            className='mt-auto'

                            />
                        </button>
                        <button>Contant</button>
                        <button>Blogs</button>

                        </div> 
                    <div> 
                        <button className=' tracking-tight text-sm  px-2 sm: sm:text-base sm:px-7 py-2 font-bold text-white rounded-full bg-sky-700 transition-shadow hover:shadow-lg hover:shadow-gray-600'>Schedule a Meeting</button>
                    </div>
                    <div>
                      <Menu 
                       menu={menu} 
                       toggleDrawer={toggleDrawer}
                       isOpen={isOpen}/>
                       
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}