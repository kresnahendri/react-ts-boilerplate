import RegisterForm from 'containers/RegisterForm/RegisterForm'
import * as React from 'react'
import { BrowserRouterProps, RouteComponentProps } from 'react-router-dom'
import { Button } from '../components'
import articleService, { IArticle } from '../services/articleService'

interface IState {
  articles: IArticle[],
}

interface IProps extends RouteComponentProps, BrowserRouterProps { }

class Home extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      articles: [],
    }
  }

  handleFetchArticles = () => {
    articleService.get()
      .subscribe(
        (articles) => this.setState({ articles }),
      )
  }

  handleClearArticles = () => {
    this.setState({ articles: [] })
  }

  render() {
    return (
      <div className="container">
        <h1>Home pages</h1>
        <img src={require('../assets/placeholder-image.jpg')} alt="" />
        <RegisterForm />
        <Button variant="primary" size="md" onClick={this.handleFetchArticles}>Fetch Article</Button>
        <Button variant="nude" size="md" onClick={this.handleClearArticles}>Clear</Button>
        {this.state.articles.map((article, idx) => <div key={idx}>{article.title}</div>)}
      </div>
    )
  }
}

export default Home
