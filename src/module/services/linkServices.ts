import { ILinkCreate } from '../interfaces/ILinkCreate'
import { IOptions } from '../interfaces/IOptions'
const axios = require('axios')
export class LinkService {
  private token: string = ''
  private BASE_URL: string = ''

  constructor (options?: IOptions) {
    this.BASE_URL = 'https://link.recepozen.com/' || options?.BASE_URL
  }

  private async http (method: string, path: string, data?: any, headers?: any) {
    const url = `${this.BASE_URL}${path}`

    return await axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    })
  }

  async login (email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    const response = await this.http('POST', 'api/methods/auth.signin', body)
    this.token = response.data.token
    return this
  }

  async create (data: ILinkCreate) {
    if (this.token === '') {
      throw new Error('Must be login')
    }

    const body = {
      link: data
    }

    return await this.http('POST', 'api/methods/link.create', body, { Authorization: `Bearer ${this.token}` })
  }
}
