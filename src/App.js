import react, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import AC from './components/ArticleContainer'
import { Container } from 'react-bootstrap'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3bb5862f127496d8e3951dc20cbf723')
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
          <Container>
            {/* <AC art={this.state.articles} />
            <Login/> */}
            <Switch>
              <Route exact path="/home" render={rp => (
                <AC
                  {...rp}
                  art={this.state.articles}
                />
              )} />
              <Route path="/login" component={Login} />
            </Switch>
          </Container>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;