import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const OpenArticle = (props) => {
  console.log(props.art)
  const [article,setarticle] = useState(props.art)

  // useEffect(() => {
  //   const data = localStorage.getItem('article')
  //   if (data) {
  //     setarticle(JSON.parse(data))
  //   }
  // })

  useEffect(() =>{
    localStorage.setItem('article', JSON.stringify(article))
  })


console.log(localStorage)

  return (
    <div>
      <Card>
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
      </Card>
      <Button href="/da">draft</Button>
    </div>
  )
}

export default OpenArticle