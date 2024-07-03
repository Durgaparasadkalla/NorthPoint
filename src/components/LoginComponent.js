import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function LoginComponent() {
  const navigate = useNavigate()
  const logIn = () => {
    navigate('/ourWork')
  }
  return (
    <div>
      <h1>
        This is Login Component
      </h1>
      <Button variant="primary" onClick={logIn}>Login</Button>
    </div>
  )
}
