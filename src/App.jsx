import Experience from "./components/Experience"
import Home from "./components/Home"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contacts from "./components/Contacts"


const App = () => {
  return (
    <div className="relative">
      <Home>
           <Navbar />
           <Intro />
           <About />
           <Projects />
           <Experience />
           <Reviews />
           <Contacts />
      </Home>
    </div>
  )
}

export default App
