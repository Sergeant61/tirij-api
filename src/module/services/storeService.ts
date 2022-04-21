import { IStoresCreate } from '../interfaces/IStoresCreate'
import { IOptions, IRequestOptions } from '../interfaces/IOptions'
import { IAuth } from '../interfaces/IAuth'
import { BaseService } from './baseService'

export class StoresService extends BaseService {
  constructor (options: IOptions | null = null, auth?: IAuth) {
    super(options, auth)
  }

  async create (store: IStoresCreate) {
    const body = {
      store: store
    }

    return await this.http('POST', 'api/methods/app.stores.create', body, { Authorization: this.Authorization })
  }

  async show (slug: string) {
    const body = {
      slug: slug
    }

    return await this.http('POST', 'api/methods/app.stores.show', body, { Authorization: this.Authorization })
  }

  async list (options: IRequestOptions) {
    const body = {
      options: options
    }

    return await this.http('POST', 'api/methods/app.stores.list', body, { Authorization: this.Authorization })
  }
}
