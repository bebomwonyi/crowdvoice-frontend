import React, { Component } from 'react'
import Article from './Article'

class AC extends Component {
  render() {
    return (
      <div>
        {this.props.art ?
        this.props.art.map(art=>{
          return <Article art={art}/>
        }) : null
        }
      </div>
    )
  }
}

export default AC