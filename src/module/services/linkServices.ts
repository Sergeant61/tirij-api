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

  async create (slug: string, data: ILinkCreate) {
    if (this.token === '') {
      throw new Error('Must be login')
    }

    const body = {
      slug: slug,
      link: data
    }

    return await this.http('POST', 'api/methods/app.links.create', body, { Authorization: `Bearer ${this.token}` })
  }
}

export const Link = {
  BASE_URL: 'https://link.recepozen.com/',

  async http (method: string, path: string, data?: any, headers?: any) {
    const url = `${this.BASE_URL}${path}`

    return await axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    })
  },

  async create (longUrl: string) {
    const body = {
      link: {
        longUrl: longUrl
      }
    }

    return await this.http('POST', 'api/methods/app.links.createFree', body)
  }
}
