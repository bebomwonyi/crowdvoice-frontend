import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Navbar sticky="bottom" expand="xl" bg="dark" variant="dark">
      <Navbar.Brand href="/home"> CrowdVoice </Navbar.Brand>
    </Navbar>
  )
}

export default Footer