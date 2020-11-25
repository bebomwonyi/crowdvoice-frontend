import React from 'react'
import Article from './Article'
import { CardColumns } from 'react-bootstrap'

const AC = (props) => {
  // console.log(props.art.articles)
  return (
    <div>
      <CardColumns>
      {props.art.articles ?
        props.art.articles.map(art => {
          return <Article art={art} />
        }) : null
      }
      </CardColumns>
    </div>
  )
}

export default AC