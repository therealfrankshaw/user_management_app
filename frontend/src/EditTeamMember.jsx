import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function EditTeamMember() {
  const { id } = useParams()
  const navigate = useNavigate()
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
    fetch(`http://127.0.0.1:8000/api/users/${id}`)
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
    fetch(`http://localhost:8000/api/users/${id}/`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(err => Promise.reject(err));
      }
      toast(`User Deleted: ${formData.first_name} ${formData.last_name}`)
      navigate('/',  { state: { refreshNeeded: true }})
    })
    .catch((error) => {
      Object.entries(error).forEach(([_, value]) => {
        toast(`An error occurred while deleting the user. \n ${value}`)
      });
    })
    
  }

  const updateTeamMember = () => {
    fetch(`http://localhost:8000/api/users/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      if (!response.ok) {
        console.log('User not updated')
        return response.json().then(err => Promise.reject(err));
      }
      navigate('/')
    })
    .catch((error) => {
      Object.entries(error).forEach(([_, value]) => {
        toast(`An error occurred while updating the user. \n ${value}`)
      });
    });
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