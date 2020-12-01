import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar expand="xl" bg="dark" variant="dark">
      <Navbar.Brand href="/home"> CrowdVoice </Navbar.Brand>
      <Nav>

      </Nav>
      <Nav className="mr-auto">
        <Nav.Link href="/login" className="mr-sm-2">login</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header