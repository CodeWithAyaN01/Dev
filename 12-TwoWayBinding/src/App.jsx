import React from 'react'
import { useState } from 'react'

const App = () => {
  const [text, set_text] = useState("") // text is empty in starting
  return (
    <div>
      
      <form
        className='bg-gray-200 p-5 m-5'
        onSubmit={(e) => {
          e.preventDefault()
          set_text('')
        }}
      >
        <input type="text" 
          className='bg-green-100 p-5 m-5'
          placeholder='Kuch v likho'
          value={text} // this is a hard coaded value 
          onChange={(e) => {
            set_text(e.target.value) // we are changing this set_text and then the text is changing
          }}
        />
        <button
          className='bg-yellow-100 p-4 m-4'
        >Submit</button>
      </form>

    </div>
  )
}

export default App