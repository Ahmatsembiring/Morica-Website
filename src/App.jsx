import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Ingredients from './components/sections/Ingredients'
import Features from './components/sections/Features'
import HowToUse from './components/sections/HowToUse'
import About from './components/sections/About'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'

function App() {
  return (
    <div className="overflow-x-hidden bg-cream">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Ingredients />
      <Features />
      <HowToUse />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App