import { useState, useEffect } from 'react'

function EditTeamMember() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    number: '',
    role: 'regular',
  })

  const formStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'
  }

  const getTeamMember = () => {
    fetch('http://127.0.0.1:8000/api/users/7')
      .then(response => response.json())
      .then(data => {
        const userData = {
          ...data,
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.number,
        }
        setFormData(userData)
      })
      .catch(error => console.error('get team members error', error))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const deleteTeamMember = () => {
    fetch(`http://localhost:8000/api/users/6/`, {
      method: 'DELETE',
    })
    setFormData({
      ...formData,
      first_name: '',
      last_name: '',
      email: '',
      number: '',
      role: 'regular',
    })
  }

  const updateTeamMember = () => {
    fetch(`http://localhost:8000/api/users/7/`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  useEffect(() => {
    getTeamMember()
  }, [])

  return (
    <>
      <h1>Edit team member</h1>
      <p>Edit contact info, location and role.</p>
      <hr />
      <form style={formStyle}>
        <h2>info</h2>
        <input type="text" placeholder="first name" name="first_name" value={formData.first_name} onChange={handleChange} />
        <input type="text" placeholder="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
        <input type="text" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="text" placeholder="phone" name="number" value={formData.number} onChange={handleChange} />
        <h2>Role</h2>
      <label><input type="radio" name="role" value="regular" checked={formData.role === 'regular'} onChange={handleChange} /> Regular - Can't delete members</label>
      <label><input type="radio" name="role" value="admin" checked={formData.role === 'admin'} onChange={handleChange} /> Admin - Can delete members</label>
      </form>
      <button onClick={deleteTeamMember}>Delete</button>
      <button onClick={updateTeamMember}>Save</button>
    </>
  )
}

export default EditTeamMember