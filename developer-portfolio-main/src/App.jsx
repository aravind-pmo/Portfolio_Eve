import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import Certification from './components/Certification.jsx'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certification />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
