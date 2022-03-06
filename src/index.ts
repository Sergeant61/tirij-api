import { CityService } from './module/services/city-service'
require('dotenv').config()

const n11Api = { CityService }

export default n11Api
export { CityService }
module.exports = n11Api

// new CityService('', '').connect().then(cityService => {
//   cityService.GetCities().then(data => {
//     console.log(data)
//   }).catch(error => {
//     console.log(error)
//   })
// })
