import * as React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Home from "../pages/Home"
import Other from "../pages/Other"

const Routers = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/other">Other</Link></li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/other" component={Other} />
      </div>
    </Router>
  )
}

export default Routers
