import react, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import SignUp from './components/signup'
import AC from './components/ArticleContainer'
import { Container } from 'react-bootstrap'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import OpenArticle from './components/OpenArticle'
import DA from './components/draftarticle'

let article = []

class App extends Component {
  state = {
    articles: [],
    opa: []
  }



  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/articles')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         articles: data
  //       })
  //     })
  // }

  handleClick=(e)=>{
    this.setState({
      opa: e
    })
    article = e
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e3bb5862f127496d8e3951dc20cbf723')
      .then(res => res.json())
      .then(data => {
        this.setState({
          articles: data
        })
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <main>
          <Container>
            <Switch>
              <Route exact path="/home" render={rp => (
                <AC
                  {...rp}
                  art={this.state.articles}
                  openArt={this.handleClick}
                />
              )} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/oa" render={a => (
                <OpenArticle
                {...a}
                art={this.state.opa}
                />
              )}/>
              <Route path="/da" render={a => (
                <DA
                {...a}
                art={this.state.opa} />
              )}/>
            </Switch>
          </Container>
          </main>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;