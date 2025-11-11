import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-1 justify-between text-l py-7 px-10 '>
        <h4 className='bg-black rounded-full text-white py-2 px-5 uppercase text-center tracking-wide'>Target Audience</h4>
        <button className='bg-gray-300 rounded-full p-3 uppercase tracking-wider text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar