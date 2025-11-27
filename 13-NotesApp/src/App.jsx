import React, { useState } from 'react'
import Card from './Component/Card'

const App = () => {

  const [title, set_title] = useState('')
  const [text, set_text] = useState('')
  const [task, set_task] = useState([])

  const submitHandel = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,text}) // one object as { title: .... and text: ....}
    set_task(copyTask)
  }

  

  return (
    <div>
      <div className='bg-black h-screen w-full text-white gap-50 lg:flex'>

      <form className='flex flex-col p-10 gap-4 text-2xl p-5 lg:w-1/2' onSubmit={(e) => {submitHandel(e)}} >
        <h1>Add Notes</h1>
        {/* Text Heading */}
        <input type="text" placeholder='About' className='border-white border-1 px-5 py-3 bg-gray-600 rounded' 
            value={title}
            onChange={(e) => {
              console.log("title Typing.....")
              set_title(e.target.value)
            }}
        />
        <textarea type="text" placeholder='Enter your notes' className='p-2 border-white border-1 bg-gray-900 rounded h-40' 
          value={text}
          onChange={(e) => {
            console.log("Typig Text")
            set_text(e.target.value)
          }}
        ></textarea>
        <button
          className='bg-white text-black p-3 font-bold text-2xl active:scale-95'
        >Post</button>

      </form>

      <div className='p-2 lg:w-1/2 gap-2'>

      <h1 className='text-xl font-bold'>Your Notes</h1>
          <div className='flex gap-10 flex-wrap mt-5 overflow-auto h-full'>
            {task.map((elem,key) => {
              return (<Card key={key} index={key+1} head={elem.title} notes={elem.text} />)
            })}
          </div>
      </div>

      </div>

    </div>
  )
}

export default App