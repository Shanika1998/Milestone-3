import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function AllCats(data) {
	
	const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5002/cats')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const resData = await response.json()
        setCats(resData)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    };
		fetchData()
	}, [])

	let catsFormatted = null
  if (loading) {
    catsFormatted = <p>Loading...</p>
  } else if (error) {
    catsFormatted = <p>Error: {error.message}</p>
  } else {
    catsFormatted = cats.map((cat) => (
      <div className="cat-card" key={cat._id}>
          <Link to={`/cats/${cat._id}`}>
              <img className="cat-image" src={cat.image} alt={cat.name} />
              <div className="cat-details">
                  <h2>{cat.name}</h2>
                  <p className="text">{cat.breed}</p>
              </div>
          </Link>
      </div>
  ));
    
  }
	return (
		<main>
			<h1>Cat Inventory!!</h1>
			<div className="row">
				{catsFormatted}
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

export default AllCats