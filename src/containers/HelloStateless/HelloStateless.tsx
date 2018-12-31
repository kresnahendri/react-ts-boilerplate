import * as React from "react"

export interface IHelloStatelessProps {
  compiler: string,
  framework: string
}

const HelloStateless = (props: IHelloStatelessProps) => {
  return (
    <div>
      <p>Stateless: Hello from {props.compiler} and {props.framework}</p>
    </div>

  )
}

export { HelloStateless }
