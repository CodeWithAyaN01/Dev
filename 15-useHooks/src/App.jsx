import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const valChange = () => {
    console.log("Some Value changing...")
  }
  useEffect(() => { 
    valChange()
    console.log("useEffect is running")
},[a]) //  if no dependencies it will run in every state change if given dependencies it will only run when the dependency's state is change

  return (

    <div className='bg-gray-500 h-screen w-full'>

      <h1 className='font-bold text-3xl p-7 '>
        A is {a}
      </h1>
      <h1 className='font-bold text-3xl p-7 '>
        B is {b}
      </h1>

      <button
      className='bg-green-300 p-5 m-5 rounded'
      onClick={() => {
        setA(prev => prev +1)
      }}
      >
        Change A
      </button>

      <button
      className='bg-yellow-300 p-5 m-5 rounded'
      onClick={() => {
        setB(prev => prev -1)
      }}
      >
        Change B
      </button>

    </div>
  )
}

export default App