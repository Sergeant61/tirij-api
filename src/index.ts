import { LinkService } from './module/services/linkService'
import { StoresService } from './module/services/storeService'

require('dotenv').config()

const linkApi = { LinkService, StoresService }

export default linkApi
export { LinkService, StoresService }
module.exports = linkApi
