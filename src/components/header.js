import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export const Header = (props) => {
  return (
    <Navbar expand="xl" bg="dark" variant="dark">
      <Navbar.Brand href="/home"> CrowdVoice </Navbar.Brand>
      <Nav>

      </Nav>
      {localStorage.token
        ? <NavDropdown title={`user`}>
          <NavDropdown.Item href="/user">Account</NavDropdown.Item>
          <NavDropdown.Item href="/user/draft">drafts</NavDropdown.Item>
          <NavDropdown.Item >Sign out</NavDropdown.Item>
        </NavDropdown>
        :
        <Nav className="mr-auto">
          <Nav.Link href="/login" className="mr-sm-2">login</Nav.Link>
        </Nav>}
    </Navbar>
  )
}

export default Header