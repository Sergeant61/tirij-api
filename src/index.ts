import { EExpireType } from './module/interfaces/ILinkCreate'
import { LinkService } from './module/services/linkServices'

require('dotenv').config()

const linkApi = { LinkService, EExpireType }

export default linkApi
export { LinkService, EExpireType }
module.exports = linkApi
