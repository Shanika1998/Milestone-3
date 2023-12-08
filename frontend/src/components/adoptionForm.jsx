import React, { useState } from 'react';

const submitAdoptionForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:5002/adopt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error submitting adoption form: ${error.message}`)
  }
};

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitAdoptionForm(formData)
      console.log('Adoption form submitted successfully', response)
      // Handle successful form submission (e.g., show success message, redirect)
    } catch (error) {
      console.error('Error submitting adoption form:', error.message)
      // Handle form submission error (e.g., display error message)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AdoptionForm