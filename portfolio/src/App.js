import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
