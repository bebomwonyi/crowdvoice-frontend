import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import './login.css'

class Login extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(info => {
        console.log(info)
        localStorage.setItem("token", info.jwt)
      })
  }


  render() {
    return (
      <div>
        <Card style={{ width: '24rem' }}>
          <Card.Title> Log in</Card.Title>
          <form onSubmit={(e) => this.login(e)}>
            <label>
              Username
                <input type="text" name="username" onChange={(e) => this.handleChange(e)} />
            </label>
            <label>
              Password
                <input type="password" name="password" onChange={(e) => this.handleChange(e)} />
            </label>
            <br /><input type="submit" value="submit" onClick={this.fetch}/>
          </form>
          <Card.Footer>
            <small>
              Don't have a Account? <Link to="/signup">signup</Link>
            </small>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default Login