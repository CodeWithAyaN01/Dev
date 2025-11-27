import React, { useState } from 'react'

const App = () => {
  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log("Form submitted")
  // }
  return (
    <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log("Form sumitted")
        }}>
          <input 
          type="text" 
          placeholder='Enter something'
          className='p-5 m-5 bg-blue-300 rounded-2xl border-2 '
          />
            <button
              className='px-5 py-2 m-5 bg-green-200 rounded-3xl'
            >Submit
            </button>
        </form>
        
    </div>
  )
}

export default App