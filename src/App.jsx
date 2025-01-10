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
           <div id="about">
             <About />
           </div>

           <div id="work">
             <Projects />
           </div>

          <div id="experience">
            <Experience />
          </div>

            <Reviews />

           <div id="contact"> 
             <Contacts />
           </div>
      </Home>
    </div>
  )
}

export default App
