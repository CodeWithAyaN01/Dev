import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [count, setcount] = useState(0)
  return (
    <div className='bg-gray-500 h-screen w-full text-5xl p-10 flex items-center'>
        <h1 className='bg-white rounded-3xl p-3 w-fit text-center'> Count is = {count} </h1>
        <button
          className='bg-amber-100 p-2 rounded-2xl m-10'
          onClick={() => {
            console.log('increasing')
            setcount(n => n + 1)
          }}
        > Increase Count
        </button>
        <button
        className='bg-amber-100 p-2 rounded-2xl m-10'
          onClick={() => {
            console.log("Decreasing")
            setcount(n => n-1);
          }}
        > Decrease Count
        </button>
        <button
        className='bg-amber-100 p-2 rounded-2xl m-10'
          onClick={() => {
            console.log("reset")
            setcount(0)
          }}
        >Reset</button>
    </div>
  )
}

export default App