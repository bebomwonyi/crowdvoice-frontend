import React from 'react'
import Article from './Article'
import { CardColumns } from 'react-bootstrap'

const AC = (props) => {
  // console.log(props.art[0])
  
  return (
    <div>
      <CardColumns>
      {props.art ?
        props.art.map(art => {
          return <Article art={art} openArt={props.openArt}/>
        }) : null
      }
      </CardColumns>
    </div>
  )
}

export default AC