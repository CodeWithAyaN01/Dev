import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-2/3 p-2 my-20 mx-10 w-2/3 flex overflow-x-auto'>
        {props.users.map(function(elem,idx) {
            return (
                <RightCard 
                    index={idx+1}
                    key={elem.idx}
                    intro={elem.intro}
                    img={elem.img}
                    color={elem.color}
                    tag={elem.tag}
                />
            )
        })}
    </div>
  )
}

export default RightContent