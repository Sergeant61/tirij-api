import { IOptions } from '../interfaces/IOptions'
import { IAuth } from '../interfaces/IAuth'
const axios = require('axios')

export class BaseService {
  private BASE_URL: string = ''
  Authorization: string = ''

  constructor (options: IOptions | any, auth?: IAuth) {
    this.setOptions(options)
    if (auth) {
      this.auth(auth.username, auth.password)
    }
  }

  private auth (username: string, password: string) {
    this.Authorization = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
  }

  private setOptions (options: IOptions | any) {
    this.BASE_URL = 'https://tirij.xyz/' || options?.BASE_URL
  }

  async http (method: string, path: string, data?: any, headers?: any) {
    const url = `${this.BASE_URL}${path}`

    return await axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    })
  }
}
