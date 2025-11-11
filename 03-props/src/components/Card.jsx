import React from 'react'

export const Card = (props) => { // this props is a object we can get data from it
  return (
    <div className='cardParent'>
        <div className="card">
            <h2>{props.user} ,{props.age}</h2>
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button>View</button>

        </div>
    </div>
  )
}
