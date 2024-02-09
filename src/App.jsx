import React from 'react'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import EventCard from './components/EventCard/EventCard'
import Cards from './components/Cards/Cards'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cards />
      {/* <Gallery /> */}
      <Footer />
    </div>
  )
}

export default App