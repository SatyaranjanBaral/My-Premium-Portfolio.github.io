import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
 import Projects from "./components/Projects";
 import Contact from "./components/Contact";
 import Footer from "./components/Footer";






function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="font-sans scroll-smooth">
        
      <Header/>
      <Home />
      <About/>
        <Journey />
      <Skills/>
      <Projects/>
       <Contact />
        <Footer />
      
     
     
    </div>
  )
}

export default App
