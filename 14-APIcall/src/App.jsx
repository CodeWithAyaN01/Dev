import React, { useState } from 'react'
import axios from 'axios'
const URL = 'https://meowfacts.herokuapp.com/'
const App = () => {
  const [text, settext] = useState('')

  const getData = async () => {
    const response = await axios.get(URL)
    // console.log(response.data.data)
    settext(response.data.data)
    console.log(response.data.data);
    
    
  }

  return (
    <div>
      <h1>{text}</h1>
      <button
      className='bg-green-300 p-5 m-5 rounded-2xl'
      onClick={getData}
      >Get</button>
    </div>
  )
}

export default App