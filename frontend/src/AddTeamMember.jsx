import { useState, useEffect } from 'react'

function AddTeamMember() {

  return (
    <>
      <h1>Add a team member</h1>
      <p>set email, location, and role</p>
      <hr />
      <form>
        <h2>info</h2>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last_name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="phone" />
      </form>
      <h2>Role</h2>
      <label><input type="radio" name="role" value="regular" /> Regular - Can't delete members</label>
      <label><input type="radio" name="role" value="admin" /> Admin - Can delete members</label>

      <button>Add</button>
    </>
  )
}

export default AddTeamMember