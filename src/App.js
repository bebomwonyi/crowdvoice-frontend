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
import Profile from './components/profile'


class App extends Component {
  state = {
    articles: [],
    opa: [],
    user: [],
    test:"test"
  }


  handleClick = (e) => {
    this.setState({
      opa: e
    })
  }

  componentWillMount() {
    Promise.all([
      fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e3bb5862f127496d8e3951dc20cbf723').then(value => value.json()),
      fetch('http://localhost:3000/api/v1/articles').then(value => value.json()),
      fetch('http://localhost:3000/api/v1/users', {
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.token}`
        }
      }).then(value => value.json()),
    ]).then((value) => {
      // console.log(value[0].articles)
      // console.log(value[2][0])
      this.setState({
        articles: [...value[0].articles, ...value[1]],
        user: value[2][0]
      })
    })
  }

  // componentDidMount(){
  //       fetch(`/api/v1/user_articles/${this.state.user.user_articles.id}`, {
  //       headers: {
  //         "Content-type": "application/json",
  //         "Accept": "application/json",
  //         "Authorization": `Bearer ${localStorage.token}`
  //       }
  //     })
  //     .then(value => value.json())
  //     .then(data =>{
  //       console.log(data)
  //     })
  // }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
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
                <Route path="/login" render={a => (
                  <Login
                    {...a}
                    fetch={this.handleFetch}
                  />
                )} />
                <Route path="/signup" component={SignUp} />
                <Route path="/oa" render={a => (
                  <OpenArticle
                    {...a}
                    art={this.state.opa}
                  />
                )} />
                <Route path="/da" render={a => (
                  <DA
                    {...a}
                    art={this.state.opa} 
                    user={this.state.user}/>
                )} />
                <Route path="/user" render={a => (
                  <Profile
                    {...a}
                    user={this.state.user}
                  />
                )} />
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