// components/ProfilePage.js

import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState({})
  const id = localStorage.getItem('id')

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [id])

  return (
    <div>
      <h1>Profile Page</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company && user.company.name}</p>
    </div>
  )
}

export default Profile
