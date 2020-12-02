import React, { Component } from 'react'
import { Card, Container, Form, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


class DA extends Component {


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  postArt = (e) => {
    e.preventDefault()
    console.log(JSON.parse(localStorage.getItem("article")).url)
    console.log(JSON.parse(localStorage.getItem("article")).urlToImage)
    console.log(JSON.parse(localStorage.getItem("article")).title)
    console.log(this.props.user.id)
    console.log(this.props.user.name)
    console.log(this.state.title)
    console.log(this.state.description)
    console.log(this.state.content)

    fetch("http://localhost:3000/api/v1/user_articles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user_articles: {
          user_id: this.props.user.id,
          refarttitle: JSON.parse(localStorage.getItem("article")).title,
          refartimgurl: JSON.parse(localStorage.getItem("article")).urlToImage,
          refarturl: JSON.parse(localStorage.getItem("article")).url,
          author: this.props.user.name,
          title:  this.state.title,
          description: this.state.description,
          content: this.state.content
        }
      })
    })
      .then(res => res.json())
      .then(console.log)
  }
  render() {
    return (
      <div>
        <Container>
          <Card>
            <Link target="_blank" to={{ pathname: `${JSON.parse(localStorage.getItem("article")).url}` }}>
              <Media>
                <img
                  width={64}
                  height={64}
                  src={`${JSON.parse(localStorage.getItem("article")).urlToImage}`}
                  className="mr-3"
                />
                <Media.Body>
                  <h5>{JSON.parse(localStorage.getItem("article")).title}</h5>
                  <p>
                    {JSON.parse(localStorage.getItem("article")).description}
                  </p>
                </Media.Body>
              </Media>
            </Link>
          </Card>
        </Container>
        <Container>
          <Card style={{ width: '56rem' }}>
            <Card.Title> Draft</Card.Title>
            <Form onSubmit={(e) => this.postArt(e)}>
              <Form.Label>
                Title
            </Form.Label>
              <Form.Control type="text" name="title" placeholder="Title" onChange={(e) => this.handleChange(e)} />
              <Form.Label>
                Description
            </Form.Label>
              <Form.Control type="text" name="description" placeholder="whats your article about" onChange={(e) => this.handleChange(e)} />
              <Form.Label>
                Article
            </Form.Label>
              <Form.Control as="textarea" name="content" placeholder="whats your story" style={{height: '24rem'}} onChange={(e) => this.handleChange(e)} />
              <Form.Control type="submit" value="submit" />
            </Form>
          </Card>
        </Container>
      </div>
    )
  }
}

export default DA