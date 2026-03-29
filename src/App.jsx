import React from 'react'
import './App.scss'
import Dock from './component/dock'
import Navbar from './component/Navbar'
import MacWindow from './component/window/MacWindow'
import Github from './component/window/Github'
const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Github />
    </main>
  )
}

export default App
