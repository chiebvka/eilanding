// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Benefits from './components/Benefits'
import Features from './components/Features'

import Hero from './components/Hero'
import Partners from './components/Partners'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Features />
      <Benefits />
  
    </>
  )
}

export default App
