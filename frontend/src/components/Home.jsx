import React, { useEffect, useState } from 'react'

function Home() {
    return(
        <div className="homepage">
        <section className="hero">
          <h1>Welcome to Diana's Adopt-A-Cat App</h1>
          <p>Find your new feline friend today!</p>
          <a href="/adopt" className="cta-button">Start Adoption</a>
        </section>
  
        <footer>
          <p>Contact us: contact@adoptacatapp.com</p>
          <nav className='navbar'>
            <a href="/about">About</a>
            <a href="#">FAQs</a>
            <a href="#">Terms of Service</a>
          </nav>
        </footer>
      </div>
    )
}

export default Home