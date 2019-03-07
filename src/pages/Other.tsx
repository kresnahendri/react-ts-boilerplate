import * as React from 'react'

interface IProps {
  pageName?: string
}
interface IState {
  counter: number
}
class Other extends React.Component<IProps, IState> {
  public state: IState = {
    counter: 1,
  }
  public render() {
    return (
      <div>
        <h1>{this.props.pageName || 'Other page'}</h1>
      </div>
    )
  }
}

export default Other
