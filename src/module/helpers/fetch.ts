const axios = require('axios')

const BASE_URL = 'http://localhost:3050/'

// eslint-disable-next-line no-undef
export const customFetch = async (method: string, path: string, data?: any, headers?: any) => {
  return await axios({
    method: method,
    url: `${BASE_URL}${path}`,
    data: data,
    headers: headers
  })
}
