import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TopJumbotron from "./components/TopJumbotron";

function App() {
  return (
    <div className="app">
      <Navigation />
      <TopJumbotron />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
