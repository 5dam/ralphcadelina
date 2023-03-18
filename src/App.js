import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";


function App() {

  return (
      <div className="dark:bg-black">
        <Navbar />
        <Home />
        <About />  
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </div>
  );
}

export default App;
