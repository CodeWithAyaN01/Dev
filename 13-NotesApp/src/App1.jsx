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
    set_text('')
    set_title('')
  }

  const deleteNote = (index) => {
    const copy =[...task]
    copy.splice(index,1)
    set_task(copy)
  }

  

  return (
  <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row p-6 gap-6">

    {/* LEFT: FORM */}
    <form 
      className="flex flex-col gap-5 text-xl bg-gray-900 p-8 rounded-2xl shadow-lg lg:w-1/2"
      onSubmit={submitHandel}
    >
      <h1 className="text-3xl font-bold mb-2 text-center">Add Notes</h1>

      <input 
        type="text" 
        placeholder="Title"
        className="border border-gray-700 px-5 py-3 bg-gray-800 rounded-lg focus:ring focus:ring-blue-500 outline-none"
        value={title}
        onChange={(e) => set_title(e.target.value)}
      />

      <textarea
        placeholder="Write your notes here..."
        className="border border-gray-700 px-4 py-3 bg-gray-800 rounded-lg h-40 resize-none focus:ring focus:ring-blue-500 outline-none"
        value={text}
        onChange={(e) => set_text(e.target.value)}
      ></textarea>

      <button
        className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-bold text-xl active:scale-95 transition-all"
      >
        Post
      </button>
    </form>

    {/* RIGHT: NOTES */}
    <div className="lg:w-1/2 flex flex-col">
      <h1 className="text-2xl font-bold mb-3">Your Notes</h1>

      <div className="flex gap-6 flex-wrap mt-2 overflow-y-auto h-[80vh] p-2">
        {task.map((elem, key) => (
          <Card 
            key={key}
            index={key}
            idx ={key+1}
            head={elem.title}
            notes={elem.text}
            deleteNote={deleteNote} // function passing
          />
        ))}
      </div>
    </div>

  </div>
)

}

export default App