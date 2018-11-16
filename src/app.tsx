import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "unstated"
import Routers from "./routers"

const App = () => <Provider><Routers /></Provider>

ReactDOM.render(<App />, document.getElementById("app"))
