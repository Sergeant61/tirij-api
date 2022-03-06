import SoapConnect from '../connect'

// import soap from 'soap'
export class CityService extends SoapConnect {
  // https://api.n11.com/ws/CityService.wsdl

  constructor (appKey: string, appSecret: string) {
    super(appKey, appSecret)
    this.url = 'https://api.n11.com/ws/CityService.wsdl'
  }

  public async GetCities () {
    return this.client.GetCitiesAsync()
  }

  public async GetCity (cityCode: number) {
    return this.client.GetCity({ cityCode: cityCode })
  }

  public async GetDistrict (cityCode: number) {
    return this.client.GetCitiesAsync({ cityCode: cityCode })
  }

  public async GetNeighborhoods (districtId: number) {
    return this.client.GetNeighborhoods({ districtId: districtId })
  }
}
