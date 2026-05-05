import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Founders from './components/Founders'
import Events from './components/Events'
import Portfolio from './components/Portfolio'
import Community from './components/Community'
import Podium from './components/Podium'
import Sponsors from './components/Sponsors'
import Testimonials from './components/Testimonials'
import LCMCrono from './components/LCMCrono'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Founders />
        <Events />
        <Portfolio />
        <Podium />
        <Community />
        <Sponsors />
        <Testimonials />
        <LCMCrono />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
