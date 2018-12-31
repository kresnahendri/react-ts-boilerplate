import * as React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home"
import Other from "../pages/Other"

const Routers = () => {
  return (
    <Router>
      <div>
        <Navbar>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/other">Other</Link></li>
          </ul>

          <ul>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </Navbar>

        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/other" component={Other} />
      </div>
    </Router>
  )
}

export default Routers
