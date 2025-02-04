import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Accordian({items}) {
       
        const [openState , setOpenState] = useState(Array(items.lenght).fill(false));    

       const handleClick = (index) => {
        const newOpenStates = [...openState];
        
        newOpenStates[index] = !newOpenStates[index];

        for (let i = 0; i < newOpenStates.length; i++) {
          if ( i !== index) {
            newOpenStates[i] =false;
          }
        }

        setOpenState(newOpenStates);

       };

  return (
    <div  className='lg:grid  grid-cols-2'>
        
        {items.map((item , index) => (
              <div className='max-w'
              key={index}>
                <div className='flex justify-between py-3 items-center md:mx-20 cursor-pointer border-b '
              key={index}
             onClick={() => {handleClick(index)}}>
             <h3 className='text-black font-sans  text-[14px] tracking-tighter  sm:text-[17px] sm:font-semibold  '>
                {item.title}
             </h3>
                 <button className='text-black flex px-2 py-1 bg-gray-100 border-2 border-black rounded '>
                     {!openState[index] ? <Image
                     alt='error'
                     src={item.image}
                     width={15}
                     height={15}
                     /> : <Image
                     alt='error'
                     src={item.image1}
                     width={15}
                     height={15}
                     /> }
                     
                 </button>
                 
             </div>
              
                {openState[index] && (
                  <div
                  className={` flex flex-col justify-center items-center overflow-hidden transition-all duration-300 ease-in ${
                   openState[index]? "max-h-96" : "max-h-0" 
                 }}`
                }>
                    <p className='px-2 text-gray-500 pt-5 text-[17px] max-w-[500px] lg:px-10'>
                    {item.content}
                    </p>
                </div>
                )}
              
             </div>
        ))}
    </div>
  )
}
