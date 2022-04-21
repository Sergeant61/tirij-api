import { ILinkCreate, ILinkQrOptions, ELinkType } from '../interfaces/ILinkCreate'
import { IOptions, IRequestOptions } from '../interfaces/IOptions'
import { IAuth } from '../interfaces/IAuth'
import { BaseService } from './baseService'

export class LinkService extends BaseService {
  constructor (options: IOptions | any = {}, auth?: IAuth) {
    super(options, auth)
  }

  async createFree (longUrl: string) {
    const body = {
      link: {
        longUrl: longUrl
      }
    }

    return await this.http('POST', 'api/methods/app.links.createFree', body)
  }

  async create (slug: string, link: ILinkCreate) {
    const body = {
      slug: slug,
      link: link
    }

    return await this.http('POST', 'api/methods/app.links.create', body, { Authorization: this.Authorization })
  }

  async createQr (slug: string, _id: string, type: ELinkType, options?: ILinkQrOptions) {
    const body = {
      slug: slug,
      _id: _id,
      type: type,
      options: options
    }

    return await this.http('POST', 'api/methods/app.links.createQr', body, { Authorization: this.Authorization })
  }

  async delete (slug: string, _id: string) {
    const body = {
      slug: slug,
      _id: _id
    }

    return await this.http('POST', 'api/methods/app.links.delete', body, { Authorization: this.Authorization })
  }

  async update (slug: string, _id: string, link: ILinkCreate) {
    const body = {
      slug: slug,
      _id: _id,
      link: link
    }

    return await this.http('POST', 'api/methods/app.links.update', body, { Authorization: this.Authorization })
  }

  async show (slug: string, _id: string) {
    const body = {
      slug: slug,
      _id: _id
    }

    return await this.http('POST', 'api/methods/app.links.show', body, { Authorization: this.Authorization })
  }

  async list (slug: string, options: IRequestOptions) {
    const body = {
      slug: slug,
      options: options
    }

    return await this.http('POST', 'api/methods/app.links.list', body, { Authorization: this.Authorization })
  }
}
