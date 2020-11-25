import react, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import AC from './components/ArticleContainer'
import { Container, Card } from 'react-bootstrap'

class App extends Component {
  state = {
    articles: [],
    articlet: ""
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
        <Container>
          <Header />
          <main>
            <AC art={this.state.articles} />
          </main>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;