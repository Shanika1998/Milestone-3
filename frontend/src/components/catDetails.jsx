import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function CatDetails() {
    const { id } = useParams(); 
    const history = useHistory();
    const [cat, setCat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5002/cats/${id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const resData = await response.json();
            setCat(resData);
            setLoading(false);
          } catch (err) {
            setError(err);
            setLoading(false);
          }
        };
        fetchData();
      }, [id]); 

        return (
            <div>
              <h1>{cat ? cat.name : 'Loading...'}</h1>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <div>
                  <p>{cat.breed}</p>
                  <img style={{ width: '200px' }} src={cat.image} alt={cat.name} />
                  <p>
                    Age {cat.age}, {cat.description} 
                  </p>
                  <button onClick={() => history.goBack()}>Go Back</button>
                </div>
              )}
            </div>
          );
        }
        
        export default CatDetails;
        