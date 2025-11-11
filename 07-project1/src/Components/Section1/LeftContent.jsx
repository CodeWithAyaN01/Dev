import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
const LeftContent = () => {
  return (
    <div className='h-2/3 p-3 my-20 mx-10 w-1/3'>
        <div className='text-5xl font-extrabold p-10 tracking-wider'>
            <h3>Perspective <span>Customer</span> Segmentation</h3>
        </div>
        <div>
            <p className='p-7 font-medium text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, dolor praesentium in suscipit reprehenderit sequi culpa molestias nulla sed enim blanditiis mollitia possimus?</p>
        </div>
        <div>
            <p className='px-6 text-4xl'><IoIosArrowDropupCircle /></p>
        </div>
    </div>
  )
}

export default LeftContent