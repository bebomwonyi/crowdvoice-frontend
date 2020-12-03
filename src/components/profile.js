import React, { Component } from 'react'
import US from './Usershow'
import UE from './UserEdit'
import UDR from './UserDafts'
import UD from './UserDelete'
import PD from './PublishDraft'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'

class Profile extends Component {
  state={
    opd: []
  }

  handleClick = (e) => {
    this.setState({
      opd: e
    })
  }

  render(){
    console.log(this.props.user.name)
  return (
    <Container>
      <h4>this is Profile</h4>
      <Row>
        <Col md={4}>
          <div>
            <ListGroup>
              <ListGroup.Item action href="/user">user</ListGroup.Item>
              <ListGroup.Item action href="/user/edit">edit</ListGroup.Item>
              <ListGroup.Item action href="/user/draft" >draft</ListGroup.Item>
              <ListGroup.Item action href="/user/delete" >delete</ListGroup.Item>
            </ListGroup >
          </div>
        </Col>
        <Col>
          <div>
            <Container>
              <Switch>
                <Route exact path="/user" render={a => (
                  <US
                    {...a}
                    user={this.props.user}
                  />
                )} />
                <Route path="/user/edit" render={a => (
                  <UE
                    {...a}
                    user={this.props.user}
                  />
                )} />
                <Route path="/user/draft" render={a => (
                  <UDR
                    {...a}
                    user={this.props.user}
                    opd={this.handleClick}
                  />
                )} />
                <Route path="/user/publish" render={a => (
                  <PD
                    {...a}
                    user={this.props.user}
                    opd={this.state.opd}
                  />
                )} />
                <Route path="/user/delete" render={a => (
                  <UD
                    {...a}
                    user={this.props.user}
                  />
                )} />
              </Switch>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
}
export default Profile