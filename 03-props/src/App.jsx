import React from 'react'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Card user='Ayan Gupta' age={18} />
      <Card user='Atul Gupta' age={14} />
      <Card user='Shikaro Gupta' age={1} />
    </div>
  )
}

export default App