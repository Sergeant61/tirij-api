import { IOptions, Client, createClientAsync } from 'soap'
import { IAuth } from './interfaces/IAuth'

export class SoapConnect {
  public client!: Client;

  // eslint-disable-next-line no-useless-constructor
  constructor (public appKey: string, public appSecret: string, public url: string, public options: IOptions = {}) { }

  public async connect (): Promise<this> {
    this.client = await createClientAsync(this.url, this.options)
    return this
  }

  public getAuth (): IAuth {
    const auth: IAuth = {
      appKey: this.appKey,
      appSecret: this.appSecret
    }
    return auth
  }
}

export default SoapConnect
