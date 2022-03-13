import { EExpireType } from './module/interfaces/ILinkCreate'
import { LinkService, Link } from './module/services/linkServices'

require('dotenv').config()

const linkApi = { LinkService, Link, EExpireType }

export default linkApi
export { LinkService, Link, EExpireType }
module.exports = linkApi

// new LinkService().login('recep@bordo.io', '123123').then(linkService => {
//   linkService.create('store', {
//     longUrl: 'https://recepozen.com',
//     expireType: EExpireType.NEVER
//   })
// })

// Link.BASE_URL = 'http://localhost:3050/'
// Link.create('https://recepozen.com').then(data => {
//   console.log(data)
// })
