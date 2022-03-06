import { N11Service } from './services/n11-service'

export class N11API {
  service: N11Service

  constructor () {
    this.service = new N11Service()
  }
}
