import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function CatDetails() {
    const { id } = useParams()
    const history = useHistory()
    const [cat, setCat] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5002/cats/${id}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            const resData = await response.json()
            setCat(resData)
            setLoading(false)
          } catch (err) {
            setError(err)
            setLoading(false)
          }
        }
        fetchData()
      }, [id]); 

        return (
          <main>
            <div className='container'>
              <h1>{cat ? cat.name : 'Loading...'}</h1>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <div className='cat-details'>
                  <h2>{cat.breed}</h2>
                  <img className='cat-image' src={cat.image} alt={cat.name} />
                  <p>
                   <h2> Age {cat.age}, {cat.description} </h2> 
                  </p>
                  <button className='goBack-btn' onClick={() => history.goBack()}>Go Back</button>
                </div>
              )}
              
            </div>
            
        <footer>
        <p>Contact us: contact@adoptacatapp.com</p>
        <nav className='navbar'>
          <a href="/about">About</a>
          <a href="#">FAQs</a>
          <a href="#">Terms of Service</a>
        </nav>
      </footer>
      </main>
          );
        }
        
        export default CatDetails
        