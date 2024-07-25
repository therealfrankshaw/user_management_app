import { useState, useEffect } from 'react'

function EditTeamMember() {

  return (
    <>
      <h1>Edit team member</h1>
      <p>Edit contact info, location and role.</p>
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

      <button>Delete</button>
      <button>Save</button>
    </>
  )
}

export default EditTeamMember