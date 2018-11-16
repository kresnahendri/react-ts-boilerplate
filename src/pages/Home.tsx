import * as React from "react"
import Counter from "../components/Counter"
import { HelloStateful } from "../components/HelloStateful"
import { HelloStateless } from "../components/HelloStateless"

class Home extends React.Component {
  public render() {
    return (
      <div>
        <h1>Home page</h1>
        <HelloStateful compiler="Typescript" />
        <HelloStateless compiler="Typescript" framework="React" />
        <Counter />
      </div>
    )
  }
}

export default Home
