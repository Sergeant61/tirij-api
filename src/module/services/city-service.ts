import SoapConnect from '../connect'

// import soap from 'soap'
export class CityService extends SoapConnect {
  // https://api.n11.com/ws/CityService.wsdl

  constructor (appKey: string, appSecret: string) {
    super(appKey, appSecret, 'https://api.n11.com/ws/CityService.wsdl')
  }

  public async GetCities () {
    return await this.client.GetCitiesAsync()
  }

  public async GetCity (cityCode: number) {
    return await this.client.GetCity({ cityCode: cityCode })
  }

  public async GetDistrict (cityCode: number) {
    return await this.client.GetCitiesAsync({ cityCode: cityCode })
  }

  public async GetNeighborhoods (districtId: number) {
    return await this.client.GetNeighborhoods({ districtId: districtId })
  }
}
