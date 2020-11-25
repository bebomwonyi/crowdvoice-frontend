import React from 'react'
import { Card } from 'react-bootstrap'

export const Article = (props) => {
  return (
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={`${props.art.urlToImage}`}/>
        <Card.Title>{props.art.title}</Card.Title>
        <Card.Text>{props.art.description}</Card.Text>
      </Card>

  )
}

export default Article