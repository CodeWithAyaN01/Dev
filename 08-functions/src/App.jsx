import React from 'react'

const App = () => {
  const fn =(val) =>{
    console.log(val)

  }
  return (
    <div className='bg-gray-800 h-screen w-full'>
      <div>
          <input type="text" placeholder='Hello dost' onChange={function(elem){fn(elem.target.value)}} className='bg-white h-40 w-60 m-10 p-10' />
      </div>
    </div>
  )
}

export default App