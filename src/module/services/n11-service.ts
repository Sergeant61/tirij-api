import { N11ServiceCity } from './n11-service-city'

export class N11Service {
  city: N11ServiceCity

  constructor () {
    this.city = new N11ServiceCity()
  }
}
