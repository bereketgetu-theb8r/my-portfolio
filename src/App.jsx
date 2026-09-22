import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
// import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      {/* <Team /> */}
      <Testimonials />
      <Contact />
      <MapSection />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
