import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Article = (props) => {
  return (
    <Link to="oa">
      <Card style={{width: '18rem'}} onClick={(e)=>props.openArt(props.art)}>
        <Card.Img variant="top" src={`${props.art.urlToImage}`}/>
        <Card.Title>{props.art.title}</Card.Title>
        <Card.Text>{props.art.description}</Card.Text>
      </Card>
    </Link>
  )
}

export default Article