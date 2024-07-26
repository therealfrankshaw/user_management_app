import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TeamMembers() {
  const navigate = useNavigate()
  const [teamMembers, setTeamMembers] = useState([])

  const getTeamMembers = () => {
    fetch('http://127.0.0.1:8000/api/users')

      .then(response => response.json())
      .then(data => {
        const userData = data.map(user => {
          return {
            ...user,
            name: user.first_name + ' ' + user.last_name,
            phone: user.number,
          }
        })
        setTeamMembers(userData)
      })
      .catch(error => console.error('get team members error', error))
  }
  
  const handleClick = (id) => {
    navigate(`/edit_team_member/${id}`)
  }

  useEffect(() => {
    getTeamMembers()
  }, [])

  const buttonStyle = {
    width: '50px', 
    height: '50px', 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px', 
    margin: '10px',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'grey'
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Team Members</h1>
        <Link to="/add_team_member" style={buttonStyle}> + </Link>
      </div>
      <p>You have {teamMembers.length} team members</p>
      <hr />
      {teamMembers.map((member) => {
        let displayName = member.name
        if (member.role === 'admin') {
          displayName = `${member.name} (admin)`
        }
        return (
          <div key={`member-${member.id}`} style={{cursor: 'pointer'}} onClick={()=>handleClick(member.id)}>
            <h2>{displayName}</h2>
            <p>{member.phone}</p>
            <p>{member.email}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default TeamMembers