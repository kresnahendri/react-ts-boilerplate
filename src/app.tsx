import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "unstated"
import Counter from "./components/Counter"
import { HelloStateful } from "./components/HelloStateful"
import { HelloStateless } from "./components/HelloStateless"

const App = () => <Provider>
  <div>
    <HelloStateful compiler="Typescript" />
    <HelloStateless compiler="Typescript" framework="React" />
    <Counter />
  </div>
</Provider>

ReactDOM.render(<App />, document.getElementById("app"))
