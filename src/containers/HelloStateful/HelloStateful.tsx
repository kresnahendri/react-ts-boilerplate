import * as React from "react"

interface IHelloStatefulProps {
  compiler: string,
  framework?: string
}

class HelloStateful extends React.Component<IHelloStatefulProps, {}> {
  public componentDidMount = () => {
    console.log("Component is mounted")
  }

  public render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Stateful: Hello from {this.props.compiler} and {this.props.framework}</p>
      </div>
    )
  }
}

export { HelloStateful }
