import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandator
      bg-lightBg text-lightText
      dark:bg-darkBg dark:text-darkText
      transition-colors duration-300
    ">
      <Navbar />
      <section className="nap-start"><Hero /></section>
      <section className="snap-start"><About /></section>
      <section className="snap-start"><Skills /></section>
      <section className="snap-start"><Services /></section>
      <section className="snap-start"><Projects /></section>
      <section className="snap-start"><Contact /></section>
      <Footer />
      {/* <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;