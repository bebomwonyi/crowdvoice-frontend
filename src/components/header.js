import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col lg="auto">this is my header</Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header