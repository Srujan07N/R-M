import { useState } from 'react'
import Loader from './components/Loader'
import StarfieldBackground from './components/StarfieldBackground'
import OrnamentalBorder from './components/OrnamentalBorder'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Couple from './components/Couple'
import Countdown from './components/Countdown'
import Events from './components/Events'
import Venue from './components/Venue'
import RSVP from './components/RSVP'
import MusicToggle from './components/MusicToggle'
import Footer from './components/Footer'

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="relative min-h-screen bg-ivory">
      <Loader isOpening={opened} onOpen={() => setOpened(true)} />
      {/* Maroon stars floating over the entire site, except navbar/loader */}
      <StarfieldBackground zIndex={30} color="126, 43, 50" />
      <OrnamentalBorder />

      {opened && (
        <>
          <Navbar />
          <MusicToggle />
          <main>
            <Hero />
            <Invitation />
            <Couple />
            <Countdown />
            <Events />
            <Venue />
            <RSVP />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
