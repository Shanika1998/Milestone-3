import React from 'react'

function Home() {
    return(
        <div className="homepage">
        <section className="hero">
          <h1>Welcome to Diana's Adopt-A-Cat App</h1>
          <p>Find your new feline friend today!</p>
          <a href="/adopt" className="cta-button">Start Adoption</a>
          <div className="image-container">
          <img src={'https://media.newyorker.com/photos/5ab95b9e8d2914101d1816ee/4:3/w_1439,h_1080,c_limit/Obsessions-How-Cats-Tamed-Us.jpg'} alt="Adorable Cat" className="cat-image" />
          </div>
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