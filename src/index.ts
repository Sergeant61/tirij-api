import { EExpireType } from './module/interfaces/ILinkCreate'
import { LinkService } from './module/services/linkServices'

require('dotenv').config()

const linkApi = { LinkService, EExpireType }

export default linkApi
export { LinkService, EExpireType }
module.exports = linkApi

// new LinkService().login('recep@bordo.io', '123123').then(linkService => {
//   linkService.create('store', {
//     longUrl: 'https://recepozen.com',
//     expireType: EExpireType.NEVER
//   })
// })
