import React, { useState } from 'react'
import Image from 'next/image';
import SharedHosting from '../../../public/images/icons/server-svgrepo-com.svg';
import wordpress from '../../../public/images/icons/wordpress-svgrepo-com.svg';
import vps from '../../../public/images/icons/server-2-svgrepo-com.svg';

export default function HostingHover({hovered , setHovered}) {
    

  return (
    <>
    {hovered && (
    <div className=' hidden lg:fixed mt-[140px] bg-white  lg:flex px-5 text-gray-600 gap-14 mx-10 rounded-lg'>
            <div>
                <h3 className='text-xl font-bold font-sans py-3'>Hosting Made Easy</h3>
                <p className='max-w-[300px]'>High-performance, secure hosting for your website. Say goodbye to slow speeds and lost clients. Join over 1,000 websites hosted with us.</p>
            </div>
            <div className=''>
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
    
                        
                    </div>
                 <div>
                 <div className='flex gap-3 py-5 items-start'>
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
                    <div className='flex gap-3 py-5 items-start'>
                        <Image
                        alt='error'
                        src={wordpress}
                        width={40}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold'>Wordpress Development</h3>
                            <p className='font-sans '>Fast & Quik</p>
                        </div> 
                        
                    </div>
            </div>
        </div>
        )};
    </>
  )
}
