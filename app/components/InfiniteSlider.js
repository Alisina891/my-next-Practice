"use client"
import { useEffect ,useState } from 'react'
import React from 'react'
import Image from 'next/image'

export default function InfiniteSlider() {
    const images = [
        "/images/icons/1.png",
        "/images/icons/2.png",
        "/images/icons/3.png",
        "/images/icons/4.png",
        "/images/icons/5.png",
        "/images/icons/7.png",
        "/images/icons/8.png",
        
    ]

    const [slide , setSlide] = useState([
      ...images , ...images
    ])
    const [index , setIndex] = useState(0)
    
  return (
    <div className=' overflow-hidden w-full bg-gray-100 py-10'>
        <div className='flex animate-infinite-scroll h-16'>
           {[ ...images ,...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images ,...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images ,...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images,...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images,...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images,...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images , ...images].map((src , i) => (
             <Image
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            width={500}
            height={400}
            className='rounded-lg mx-2'
            />
            
           ))} 
        </div>
    </div>
  )
}
