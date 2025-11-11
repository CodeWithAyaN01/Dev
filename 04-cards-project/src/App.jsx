import React from 'react'
import {useState, useEffect} from 'react'
import Card from './components/Card'
import { Navbar } from './components/Navbar'
import jobData from './components/UserData';


const App = () => {
  return (
    <div >
        <Navbar />
      <div className='main'>
          {jobData.map((data,idx) => {
            return ( <div key = {idx}>
                <Card 
                  name = {data.company}
                  info = {data.description}
                  salary = {data.salary}
                  location = {data.location}
                  logo = {data.logo}
                  url = 'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg'
              />
            </div>
              
            )
          })}
      </div>
    </div>
  )
}

export default App