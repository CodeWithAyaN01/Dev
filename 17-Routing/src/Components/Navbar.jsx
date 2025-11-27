
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-700 flex justify-between p-3 font-bold underline text-white'>
        Welcome To this Page

        <div className='flex space-x-6 font-bold underline'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>



        {/* this includes Reloading Part also soo we have a different way also...
        <div className='flex space-x-6 font-bold underline '>
            <a href="/about">About</a>
            <a href="/">Home</a>
            <a href="/Contact">Contact</a>
        </div> */}
        
    </div>
  )
}

export default Navbar