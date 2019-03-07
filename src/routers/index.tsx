import * as React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Other from '../pages/Other'

const Routers: React.FunctionComponent = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/other">Other</Link></li>
        </ul>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/other" component={Other} />
      </div>
    </Router>
  )
}

export default Routers
