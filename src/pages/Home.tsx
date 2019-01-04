import * as React from "react"
import Button from "../components/Button/Button"
import Counter from "../containers/Counter/Counter"
import { HelloStateful } from "../containers/HelloStateful/HelloStateful"
import { HelloStateless } from "../containers/HelloStateless/HelloStateless"

class Home extends React.Component {
  public render() {
    return (
      <div className="container">
        <h1>Home pages</h1>
        <HelloStateful compiler="Typescript" />
        <HelloStateless compiler="Typescript" framework="React" />
        <Counter />
        <Button color="babu">Button</Button>
        <img src={require("../assets/placeholder-image.jpg")} alt="" />
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Paragraph</p>
        <p>Paragraph</p>
        <small>Small Text</small>
        <br />
        <a href={"true"}>Link</a>

        <div className="row">
          <div className="col-4">Col 1</div>
          <div className="col-4">Col 2</div>
          <div className="col-4">Col 3</div>
        </div>
      </div>
    )
  }
}

export default Home
