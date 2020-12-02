import React, { useEffect, useState } from 'react'
import { Button, Card, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const OpenArticle = (props) => {
  console.log(props.art)
  const [article, setarticle] = useState(props.art)


  useEffect(() => {
    localStorage.setItem('article', JSON.stringify(article))
  })


  return (
    < div >
      {props.art.refarturl ?
        <div>
          <Card>
            <Link target="_blank" to={{ pathname: `${props.art.refarturl}` }}>
              <Media>
                <img
                  width={64}
                  height={64}
                  src={`${props.art.refartimgurl}`}
                  className="mr-3"
                />
                <Card.Title>
                  {props.art.refarttitle}
                </Card.Title>
              </Media>
            </Link>
          </Card>
        </div>
        : null
      }
      <Card>
        <Card.Img src={`${props.art.urlToImage}`} />
        <Card.Title>
          {props.art.title}
        </Card.Title>
        <Card.Body>
          <Card.Text>
            {props.art.description}
          </Card.Text>
          {props.art.refarturl ?
            <Card.Text>
              {props.art.content}
            </Card.Text>
            :
            <Card.Text>
              {props.art.content} finish article at
            <Link target="_blank" to={{ pathname: `${props.art.url}` }}>
                {props.art.source.name}
              </Link>
            </Card.Text>
          }
        </Card.Body>
      </Card>
      {
        props.art.refarturl ?
          null:
          <Button href="/da">draft</Button>
      }
    </div >
  )
}

export default OpenArticle