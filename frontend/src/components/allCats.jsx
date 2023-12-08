import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function AllCats(data) {
	
	const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5002/cats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setCats(resData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
		fetchData()
	}, [])

	let catsFormatted = null
  if (loading) {
    catsFormatted = <p>Loading...</p>;
  } else if (error) {
    catsFormatted = <p>Error: {error.message}</p>;
  } else {
    catsFormatted = cats.map((cat) => (
      <div className="col-sm-4" key={cat._id}>
        <h2>
          <Link to={`/cats/${cat._id}`}>{cat.name}</Link>
        </h2>
        <p className="text">{cat.breed}</p>
        <img style={{ width: '200px' }} src={cat.image} alt={cat.name} />
      </div>
    ));
  }
	return (
		<main>
			<h1>Cat Inventory!!</h1>
			<div className="row">
				{catsFormatted}
			</div>
		</main>
	)
}

export default AllCats;