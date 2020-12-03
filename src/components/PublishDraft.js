import React, { Component } from 'react'
import { Card, Container, Form, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


class PD extends Component {

  postArt = (e) => {
    e.preventDefault()
    // console.log(this.props.opd.refarturl)
    // console.log(this.props.opd.refartimgurl)
    // console.log(this.props.opd.refarttitle)
    // console.log(this.props.user.id)
    // console.log(this.props.user.name)
    // console.log(e.target[0].value)
    // console.log(e.target[1].value)
    // console.log(e.target[2].value)

    fetch("http://localhost:3000/api/v1/articles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        articles: {
          user_article_id: this.props.opd.id,
          refarttitle: this.props.opd.refarttitle,
          refartimgurl: this.props.opd.refartimgurl,
          refarturl: this.props.opd.refarturl,
          author: this.props.user.name,
          title:  e.target[0].value,
          description: e.target[1].value,
          content: e.target[2].value
        }
      })
    })
      .then(res => res.json())
      .then(console.log)
  }
  render() {
    console.log(this.props.opd)
    return (
      <div>
        <h4>this is publish draft</h4>
        <Container>
          <Card>
            <Link target="_blank" to={{ pathname: `${this.props.opd.refarturl}` }}>
              <Media>
                <img
                  width={64}
                  height={64}
                  src={`${this.props.opd.refartimgurl}`}
                  className="mr-3"
                />
                <Media.Body>
                  <h5>{this.props.opd.refarttitle}</h5>
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
              <Form.Control type="text" name="title" placeholder="Title" defaultValue={`${this.props.opd.title}`} />
              <Form.Label>
                Description
            </Form.Label>
              <Form.Control type="text" name="description" placeholder="whats your article about" defaultValue={`${this.props.opd.description}`} />
              <Form.Label>
                Article
            </Form.Label>
              <Form.Control as="textarea" name="content" placeholder="whats your story" style={{height: '24rem'}} defaultValue={`${this.props.opd.content}`} />
              <Form.Control type="submit" value="submit" />
            </Form>
          </Card>
        </Container>
      </div> 
    )
  }
}

export default PD