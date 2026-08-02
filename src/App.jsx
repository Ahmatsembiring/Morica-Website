import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AboutPage from './pages/About'
import FeaturesPage from './pages/Features'
import HowToUsePage from './pages/HowToUse'
import TeamPage from './pages/Team'

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden bg-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/keunggulan" element={<FeaturesPage />} />
          <Route path="/cara-pakai" element={<HowToUsePage />} />
          <Route path="/tim" element={<TeamPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App