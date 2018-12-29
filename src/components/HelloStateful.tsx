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
      <div>Stateful: Hello from {this.props.compiler} and {this.props.framework}</div>
    )
  }
}

export { HelloStateful }
