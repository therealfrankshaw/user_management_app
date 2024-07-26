import { useState, useEffect } from 'react'

function AddTeamMember() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    number: '',
    role: 'regular',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ 
      ...formData, 
      [name]: value
    })
  }

  const createTeamMember = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (!response.ok) {
        console.log('User not created')
        return response.json().then(err => Promise.reject(err));
      }
      return response.json();
    })
    .then((data) => {
      console.log('User created successfully:', data);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        number: '',
        role: 'regular',
      })
    }).catch((error) => {
      console.log('Error creating user:', error);
      alert('Error creating user');
    });
  }

  const formStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'
  }

  return (
    <>
      <h1>Add a team member</h1>
      <p>set email, location, and role</p>
      <hr />
      <form style={formStyle} onSubmit={createTeamMember}>
        <h2>info</h2>
        <input type="text" placeholder="first name" name="first_name" value={formData.first_name} onChange={handleChange} />
        <input type="text" placeholder="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
        <input type="text" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="text" placeholder="phone" name="number" value={formData.number} onChange={handleChange} />
        <h2>Role</h2>
        <label><input type="radio" name="role" value="regular" onChange={handleChange} checked={formData.role === 'regular'} /> Regular - Can't delete members</label>
        <label><input type="radio" name="role" value="admin" onChange={handleChange} checked={formData.role === 'admin'} /> Admin - Can delete members</label>
        <button>Add</button>
      </form>
    </>
  )
}

export default AddTeamMember