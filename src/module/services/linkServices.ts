import { customFetch } from '../helpers/fetch'
import { ILinkCreate } from '../interfaces/ILinkCreate'

export class LinkService {
  token: string = ''

  async login (email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    const response = await customFetch('POST', 'api/methods/auth.signin', body)
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

    await customFetch('POST', 'api/methods/link.create', body, { Authorization: `Bearer ${this.token}` })
  }
}
