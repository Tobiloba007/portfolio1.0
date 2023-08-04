import About from "./components/About"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import Socials from "./components/Socials"

const App = () => {
  return (
    <div className="relative">
       <Navbar />
       <Intro />
       <Socials />
       <About />
       <Projects />
       <Reviews />

    </div>
  )
}

export default App
