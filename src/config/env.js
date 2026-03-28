const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const config = {
  port: Number(process.env.PORT) || 4000,
  env: process.env.NODE_ENV || 'development',
  enableRequestResponseLogging:
    (process.env.ENABLE_REQUEST_RESPONSE_LOGGING || 'true').toLowerCase() === 'true',
}

module.exports = config
