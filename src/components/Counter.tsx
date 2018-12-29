import * as React from "react"
import { Subscribe } from "unstated"
import { CounterState } from "../states/CounterState"

class Counter extends React.Component<{ counter: CounterState }, {}> {
  public componentDidMount = () => {
    this.props.counter.fetchDummyData()
  }

  public onButtonClicked(clickType: string): void {
    this.props.counter.decrease()
  }

  public render() {
    const { counter } = this.props
    return (
      <div>
        <h3>Single Data</h3>
        <code>{JSON.stringify(counter.state.singleData)}</code>
        <h3>{counter.state.count}</h3>
        <button onClick={() => counter.increase()}>+</button>
        <button onClick={() => counter.decrease()}>-</button>
      </div>
    )
  }
}

export default () =>
  <Subscribe to={[CounterState]}>
    {(counter: any) => <Counter counter={counter} />}
  </Subscribe>
