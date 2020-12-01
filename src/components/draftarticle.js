import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const DA = (props) => {
  console.log(props.art)
  return (
    <div>
      <h4>this is draft</h4>
      {/* <Card>
        <Card.Img src={`${props.art.urlToImage}`} />
        <Card.Title>
          {props.art.title}
        </Card.Title>
        <Card.Body>
          <Card.Text>
            {props.art.description}
          </Card.Text>
          <Card.Text>
            {props.art.content} finish article at <Link to={`${props.art.url}`}>{props.art.source.name}</Link>
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  )
}

export default DA