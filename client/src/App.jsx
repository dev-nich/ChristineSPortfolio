import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
