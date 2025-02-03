import React, { useState } from 'react'
import Image from 'next/image';
import upArrow from '../../../public/images/icons/icons8-arrow-up-20.png';
import downArrow from '../../../public/images/icons/icons8-arrow-down-50.png';
import SharedHosting from '../../../public/images/icons/server-svgrepo-com.svg';
import wordpress from '../../../public/images/icons/wordpress-svgrepo-com.svg';
import vps from '../../../public/images/icons/server-2-svgrepo-com.svg';


export default function Menu({menu , toggleDrawer , isOpen}) {
     const [active , setActive] = useState(null)
     const toggleTitle = (title) => {
        setActive((prev) => (prev === title ? null : title));
     };

     
  return (
    <div className='lg:hidden'>
         <button onClick={toggleDrawer}>
        <Image
        alt='error'
        src={menu}
        width={18}
        />
        </button>
        <div className={`flex flex-col  items-start fixed top-[120px] right-0 h-full w-full bg-white z-50 transform ${
         isOpen ? "translate-x-0" : "translate-x-full" } transition-transform duration-0 overflow-y-auto
        }`}>
         <div className='flex justify-between w-full border border-gray-200 px-4 py-3 text-gray-800'><button>Home</button></div>
         <div className='w-full border border-gray-100 px-4 py-3 text-gray-800'>
            <div className=' flex justify-between'>
            <button>Hosting</button>
            <button
            onClick={() => toggleTitle("title1")}>
            {!active ? <Image
            className=''
            alt='error'
            src={downArrow}
            width={20}
            height={20}
            />:<Image
                className=''
                alt='error'
                src={upArrow}
                width={20}
                height={20}
                />}
            </button>
            </div>
            {active === "title1" && (
                <div className='flex flex-col px-10'>
                <h2 className='text-xl font-bold font-sans py-5'>Hosting Made Easy</h2>
                <p className=' text-gray-600 max-w-[650px] font-sans'>High-performance, secure hosting for your website. Say goodbye to slow speeds and lost clients. Join over 1,000 websites hosted with us.</p>
                <div className='px-5'>
                    <div className='flex gap-3 py-5'>
                        <Image
                        alt='error'
                        src={SharedHosting}
                        width={40}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold'>Shared Hosting</h3>
                            <p className='font-sans '>Simple and powerfull hosting for everyone</p>
                        </div>     
                        
                    </div>
                    <div className='flex gap-3 py-5'>
                        <Image
                        alt='error'
                        src={wordpress}
                        width={40}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold'>Wordpress</h3>
                            <p className='font-sans '>For more speed & less downtime</p>
                        </div>     
                        
                    </div>
                    <div className='flex gap-3 py-5'>
                        <Image
                        alt='error'
                        src={vps}
                        width={40}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold'>VPS Hosting</h3>
                            <p className='font-sans '>Forpower and flexible you need</p>
                        </div>     
                        
                    </div>

                </div>
            </div>
            )}
         </div>
         <div className='flex justify-between w-full border border-gray-100 px-4 py-3 text-gray-800'><button>Domain</button></div>
         <div className='w-full border border-gray-100 px-4 py-3 text-gray-800'>
         <div className='flex justify-between'>
            <button>Hire a pro</button>
           <button
           onClick={() => (toggleTitle("title2"))}>
            {!active ? <Image
            className=''
            alt='error'
            src={downArrow}
            width={20}
            height={20}
            /> : <Image
            className=''
            alt='error'
            src={upArrow}
            width={20}
            height={20}
            />}
            </button> 
            </div>
            {active === "title2" && (
                <div className='flex flex-col px-10'>
                <h2 className='text-xl font-bold font-sans py-5'>Hire the best Web Developers and Designers From our team</h2>
                <p className=' text-gray-600 max-w-[650px] font-sans'>High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service. More than 100k websites hosted.</p>
                <div className='px-5'>
                    <div className='flex gap-3 py-5'>
                        <Image
                        alt='error'
                        src={SharedHosting}
                        width={40}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold'>Web Development</h3>
                            <p className='font-sans '>Simple and powerfull hosting for everyone</p>
                        </div>     
                        
                    </div>
                    <div className='flex gap-3 py-5'>
                        <Image
                        alt='error'
                        src={vps}
                        width={40}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold'>Database Design</h3>
                            <p className='font-sans '>For more speed & less downtime</p>
                        </div>     
                        
                    </div>
                    <div className='flex gap-3 py-5'>
                        <Image
                        alt='error'
                        src={wordpress}
                        width={40}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold'>wordpress Development</h3>
                            <p className='font-sans '>Optimized hosting for wordPress sites</p>
                        </div>     
                        
                    </div>

                </div>
            </div>
            )}
         </div>
         <div className='flex justify-between w-full border border-gray-100 px-4 py-3 text-gray-800'><button>Contant</button></div>
         <div className='flex justify-between w-full border- border-gray-100 px-4 py-3 text-gray-800 mb-[120px]' ><button>Blogs</button></div>
        
     </div>
    </div>
  )
}
