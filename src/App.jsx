import NavBar from "./components/NavBar"
import AboutSection from "./sections/AboutSection"
import Contact from "./sections/Contect"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/SkillsSection"

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <AboutSection/>
        <ShowcaseSection/>
        <FeatureCards/>
        <TechStack/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App

