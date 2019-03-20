import * as React from 'react'
import { connect } from 'react-redux'
import { BrowserRouterProps, RouteComponentProps } from 'react-router-dom'
import ReduxType from 'ReduxType'
import { Button } from '../components'
import RegisterForm from '../containers/RegisterForm/RegisterForm'
import { IArticle } from '../interfaces/ICommon'
import { clearArticles, fetchArticles } from '../store/actions/articleActions'

interface IProps extends RouteComponentProps, BrowserRouterProps {
  articles: IArticle[],
  fetchArticles: () => any
  clearArticles: () => any
}

class Home extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  handleFetchArticles = () => {
    this.props.fetchArticles()
  }

  handleClearArticles = () => {
    this.props.clearArticles()
  }

  render() {
    return (
      <div className="container">
        <h1>Home pages</h1>
        <img src={require('../assets/placeholder-image.jpg')} alt="" />
        <RegisterForm />
        <Button variant="primary" size="md" onClick={this.handleFetchArticles}>Fetch Article</Button>
        <Button variant="nude" size="md" onClick={this.handleClearArticles}>Clear</Button>
        {this.props.articles.map((article, idx) => <div key={idx}>{article.title}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxType.State) => ({
  articles: state.article.articles,
})

export default connect(mapStateToProps, {
  fetchArticles,
  clearArticles,
})(Home)
