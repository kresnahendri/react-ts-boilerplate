import axios from "axios"
import { from } from "rxjs"
import { map } from "rxjs/operators"
import { Container } from "unstated"

interface ICounterState {
  count: number,
  error: any,
  singleData: any
}

class CounterState extends Container<ICounterState> {
  public state = {
    count: 0,
    error: {},
    singleData: {},
  }

  public increase() {
    this.setState({ count: this.state.count + 1 })
  }

  public decrease() {
    this.setState({ count: this.state.count - 1 })
  }

  public fetchDummyData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"

    from(axios.get(url)).pipe(
      map((res) => res.data),
    )
      .subscribe({
        error: (error) => this.setState({ error: error.response }),
        next: (data) => this.setState({ singleData: data }),
      })
  }
}

export { CounterState }
