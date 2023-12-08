import  { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewAdoptionForm (){
    const history = useHistory()
    const [adopt, setAdopt] = useState({
        fullName:'',
        email:'',
        phone:'',
        address:''
    })
    
    async function handleSubmit(e) {
        e.preventDefault()
        await fetch('http://localhost:5002/adopt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adopt),
        });
        history.push('/cats')
       
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" value={adopt.fullName} onChange={e => setAdopt({...adopt, fullName: e.target.value })} required />
            <input type="text" name="email" placeholder="Email" value={adopt.email} onChange={e => setAdopt({...adopt, email: e.target.value })} required />
            <input type="text" name="phone" placeholder="Phone" value={adopt.phone} onChange={e => setAdopt({...adopt, phone: e.target.value })} required />
            <input type="text" name="address" placeholder="Address" value={adopt.address} onChange={e => setAdopt({...adopt, address: e.target.value })} required />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewAdoptionForm