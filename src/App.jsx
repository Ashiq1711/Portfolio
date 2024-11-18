import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Service/Service'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      <Footer/>
    </div>
  )
}

export default App