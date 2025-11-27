import React from 'react'

const Card = (props) => {
  return (
    <div>
          <div className="h-60 w-48 rounded-xl bg-amber-200 text-black p-4 shadow-lg flex flex-col justify-between">
      <h2 className="font-bold text-xl border-b pb-1 mb-2">
        {props.idx}.{props.head}
      </h2>

      <p className="text-sm text-gray-800 flex-1">
        {props.notes}
      </p>

      <button 
      onClick={() => {props.deleteNote(props.index)}}
      className="bg-red-600 text-white p-1 rounded-2xl mt-3 transition-transform duration-300 hover:scale-105">
        Delete
      </button>
  </div>

    </div>
        
  )
}

export default Card