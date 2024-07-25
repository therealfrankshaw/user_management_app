import { useState, useEffect } from 'react'

function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    setTeamMembers([
      { id: 1, name: 'John Doe', role: 'admin', phone: '1234567890', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Doe', role: 'regular', phone: '1234567890', email: 'jane.doe@example.com' },
    ])
  }, [])
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Team Members</h1>
        <button style={{width: '50px', height: '50px', color: 'white', border: 'none', borderRadius: '5px', margin: '10px'}}> + </button>
      </div>
      <p>You have {teamMembers.length} team members</p>
      <hr />
      {teamMembers.map((member) => {
        let displayName = member.name
        if (member.role === 'admin') {
          displayName = `${member.name} (admin)`
        }
        return (
          <div key={`member-${member.id}`}>
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