import React from 'react'

import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";

import Map from "./components/Map/Map";
import './App.css'

function App() {
  const location = {
    
    //GOMYCODE_Hackerspace Béja
    
    Address: "Immeuble Bedouihech, 2ème étage, rue Rahmani Mnakbi",
    Latitude: 9.188522786921679,
    Longtude: 36.724479096550986, 
    };
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <Map location={location} zoomLevel={16} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  )
}

export default App
