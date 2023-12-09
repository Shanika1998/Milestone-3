import  { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function NewAdoptionForm (){
    const history = useHistory()
    const [adopt, setAdopt] = useState({
        fullName:'',
        email:'',
        phone:'',
        address:'',
        selectedCat:''
    })
    const [cats, setCats] = useState([]); // State to store available cats

    useEffect(() => {
        // Fetch available cats when the component mounts
        async function fetchCats() {
            try {
                const response = await fetch('http://localhost:5002/cats');
                const data = await response.json();
                setCats(data);
            } catch (error) {
                console.error('Error fetching cats:', error);
            }
        }
        fetchCats();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        await fetch('http://localhost:5002/adopt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adopt),
        });
        alert('Adoption form submitted! You will be contacted shortly.')

        history.push('/cats')
       
    }
    return(
        <main className='main-container'>
           <h1>Adoption Form</h1> 
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" value={adopt.fullName} onChange={e => setAdopt({...adopt, fullName: e.target.value })} className="form-input" required />
            <input type="text" name="email" placeholder="Email" value={adopt.email} onChange={e => setAdopt({...adopt, email: e.target.value })} className="form-input" required />
            <input type="text" name="phone" placeholder="Phone" value={adopt.phone} onChange={e => setAdopt({...adopt, phone: e.target.value })} className="form-input" required />
            <input type="text" name="address" placeholder="Address" value={adopt.address} onChange={e => setAdopt({...adopt, address: e.target.value })} className="form-input" required />
            <label htmlFor="catSelect">Select a Cat:</label>
            <select id="catSelect" name="catSelect" onChange={e => setAdopt({...adopt, selectedCat: e.target.value })} value={adopt.selectedCat} className='form-input'>
                <option value="">Select a Cat</option>
                {cats.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
                
            </select>
            <button className='submit-btn' type="submit">Submit</button>
        </form>
        <img src={'https://media.newyorker.com/photos/5ab95b9e8d2914101d1816ee/4:3/w_1439,h_1080,c_limit/Obsessions-How-Cats-Tamed-Us.jpg'} width= '20em' alt="Adorable Cat" className="cat-adopt-image" />
        <footer>
          <p>Contact us: contact@adoptacatapp.com</p>
          <nav className='navbar'>
            <a href="/about">About</a>
            <a href="/faq">FAQs</a>
            <a href="#">Terms of Service</a>
          </nav>
        </footer>
        </main>
    )
}

export default NewAdoptionForm