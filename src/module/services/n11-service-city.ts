// import soap from 'soap'
const soap = require('soap')

export class N11ServiceCity {
  // https://api.n11.com/ws/CityService.wsdl

  private client: any
  private url: string = 'https://api.n11.com/ws/CityService.wsdl'

  create () {
    const self = this

    return new Promise<N11ServiceCity>((resolve, reject) => {
      soap.createClient(self.url, (_error: any, _client: any) => {
        if (_error) reject(_error)
        this.client = _client
        console.log(_client.describe())
        resolve(self)
      })
    })
  }

  GetCities () {
    return new Promise<any>((resolve, reject) => {
      this.client.GetCities({}, function (_error: any, _result: any, _rawResponse: any, _soapHeader: any, _rawRequest: any): any {
        if (_error) reject(_error)
        resolve(_result)
      })
    })
  }

  GetCity (cityCode: number) {
    return new Promise<any>((resolve, reject) => {
      this.client.GetCity({ cityCode: cityCode }, function (_error: any, _result: any, _rawResponse: any, _soapHeader: any, _rawRequest: any): any {
        if (_error) reject(_error)
        resolve(_result)
      })
    })
  }

  GetDistrict (cityCode: number) {
    return new Promise<any>((resolve, reject) => {
      this.client.GetDistrict({ cityCode: cityCode }, function (_error: any, _result: any, _rawResponse: any, _soapHeader: any, _rawRequest: any): any {
        if (_error) reject(_error)
        resolve(_result)
      })
    })
  }

  GetNeighborhoods (districtId: number) {
    return new Promise<any>((resolve, reject) => {
      this.client.GetNeighborhoods({ districtId: districtId }, function (_error: any, _result: any, _rawResponse: any, _soapHeader: any, _rawRequest: any): any {
        if (_error) reject(_error)
        resolve(_result)
      })
    })
  }
}
