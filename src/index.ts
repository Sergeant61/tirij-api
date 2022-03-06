import { N11API } from './module/n11-api'
require('dotenv').config()

console.log('Hello world!')

new N11API().service.city.create()
  .then(serviceCity => {
    serviceCity.GetCities()
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })

    serviceCity.GetCity(1)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })

    // serviceCity.tc()
  })
  .catch(error => {
    console.log(error)
  })
