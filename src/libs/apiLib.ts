import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { defer, from, Observable } from 'rxjs'
interface IArgs {
  url: string
  method: string
  body?: object
  params?: object
}

export const buildApiRequest = (args: IArgs): Observable<AxiosResponse<any>> => {
  return defer(() => {
    let config: AxiosRequestConfig = {
      url: args.url,
      method: args.method,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (args.body) {
      config = { ...config, data: args.body }
    }
    if (args.params) {
      config = { ...config, params: args.params }
    }

    return from(axios(config))
  })
}
