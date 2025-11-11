import React from 'react'
import { MoveRight } from 'lucide-react';


const RightCard = (props) => {
  return (
    <div className='bg-red-200 h-full w-1/3 rounded-4xl mx-2 flex flex-col justify-between overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="image" />
        <div className='absolute top-0 left-0 h-full w-ful p-6 flex flex-col justify-between font-extrabold'>
            <h2>
                <span className='bg-white/80 px-3 py-1  rounded-full'>
            {props.index}
                </span>
            </h2>
            <div className='bg-white/50 p-3 rounded-2xl'>
                <p className='font-bold '>
                    {props.intro}
                </p>
                <div style={{backgroundColor:props.color}} className='inline-flex items-center rounded-full px-4 py-1 mt-4 justify-between'>
                    <button className='flex items-center gap-1 text-sm font-medium'>{props.tag}</button>
                    <button><MoveRight size={15}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard