import * as React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ReduxType from 'ReduxType'
import { Toast } from '../containers'
import Home from '../pages/Home'
import Hooks from '../pages/Hooks'
import Other from '../pages/Other'

interface IProps {
  showToast: boolean
  toastText: string
  toastVariant: 'success' | 'warning' | 'info' | 'error'
}

const Routers = (props: IProps) => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/other">Other</Link></li>
          <li><Link to="/hooks">Hooks</Link></li>
        </ul>
        <LoadingBar style={{ backgroundColor: 'red', height: '2px', position: 'fixed', top: 0, left: 0, right: 0 }} />
        <Toast show={props.showToast} text={props.toastText} variant={props.toastVariant} />
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/other" component={Other} />
        <Route exact={true} path="/hooks" component={Hooks} />
      </div>
    </Router>
  )
}

const mapStateToProps = (state: ReduxType.State) => ({
  showToast: state.toast.show,
  toastText: state.toast.text,
  toastVariant: state.toast.variant,
})
export default connect(mapStateToProps)(Routers)
