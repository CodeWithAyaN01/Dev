import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='h-full flex justify-center gap-2'>
        
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default PageContent