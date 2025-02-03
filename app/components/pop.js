"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import image1 from '../../public/images/icons/banner.jpg';

export default function Pop() {
    const [isOpen , setIsOpen] = useState(true);
  return (
    <div className='relative  flex items-center justify-center'>
      <div className={`absolute inset-0 transition-opacity duration-500 ${isOpen ? "bg-black/50 blur-md" : "bg-transparent blur-0"}`}> </div>
      <div className='relative z-10 '></div>

      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/80 z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg relative'>
          <Image
        src={image1}
        alt='error'
        width={280}
        />
        <button className=' absolute top-0 right-0 text-black font-bold text-3xl pr-5'
        onClick={() => setIsOpen(false)}>
          x
          </button> </div>
        </div>
      )}
    </div>
  )
}
