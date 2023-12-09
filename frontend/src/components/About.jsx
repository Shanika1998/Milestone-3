import React from 'react'

function About () {
    return(
        <main>
        <div className='about-page'>
            <p> Diana's Adopt-A-Cat is dedicated to helping cats find loving homes. There are approximately 500,000 stray cats
                roaming the streets of New York City. We, along with numerous organizations nationide, are making it a goal to decrease 
                that number everyday. </p>
            <p>
                Whether you're looking for a playful kitten or a calm, senior cat, our adoption agency offers a variety of feline friends waiting for their forever home.
                </p> 

            <p> 
                Thank you for considering adoption and being a part of our mission to give
                every cat a forever home filled with love and care. </p>       
        </div>
        <footer>
          <p>Contact us: contact@adoptacatapp.com</p>
          <nav className='navbar'>
            <a href="/about">About</a>
            <a href="/faq">FAQs</a>
          </nav>
          </footer>
        </main>

    )

}

export default About