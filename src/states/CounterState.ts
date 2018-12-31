import axios from "axios"
import { from } from "rxjs"
import { map, tap } from "rxjs/operators"
import { Container } from "unstated"

interface ICounterStateType {
  count: number
  error: any
  singleData: any
}

class CounterState extends Container<ICounterStateType> {
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
    const url: string = "https://jsonplaceholder.typicode.com/todos/1"

    from(axios.get(url))
      .pipe(
        map((res: any) => res.data),
        tap((data) => console.log("Data is", data))
      )
      .subscribe({
        error: (error: any) => this.setState({ error: error.response }),
        next: (data: object) => this.setState({ singleData: data }),
      })
  }
}

export { CounterState }
