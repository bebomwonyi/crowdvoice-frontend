import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"

class SignUp extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signUp = (e) => {
    e.preventDefault()
    // console.log(this.state.name)
    // console.log(this.state.age)
    // console.log(this.state.username)
    // console.log(this.state.password)

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          name: this.state.name,
          age: this.state.age,
          username: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div>
        <Card style={{ width: '24rem' }}>
          <Card.Title> Sign up</Card.Title>
          <form onSubmit={(e) => this.signUp(e)}>
            <label>
              Name
            <input type="text" name="name" onChange={(e) => this.handleChange(e)} />
            </label>
            <label>
              Username
            <input type="text" name="username" onChange={(e) => this.handleChange(e)} />
            </label>
            <label>
              Age
            <input type="number" name="age" onChange={(e) => this.handleChange(e)} />
            </label>
            <label>
              Password
            <input type="password" name="password" onChange={(e) => this.handleChange(e)} />
            </label>
            <input type="submit" value="submit" />
          </form>
          <Card.Footer>
            <small>
              Already have a Account? <Link to="/login">login</Link>
            </small>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default SignUp