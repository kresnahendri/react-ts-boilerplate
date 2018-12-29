import * as React from "react"

export interface IHelloStatelessProps {
  compiler: string,
  framework: string
}

const HelloStateless = (props: IHelloStatelessProps) => {
  return (
    <div>
      Stateless: Hello from {props.compiler} and {props.framework}
      {props.framework ? <div>JOS</div> : <div>JAS</div>}
    </div>

  )
}

export { HelloStateless }
