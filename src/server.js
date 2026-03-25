const http = require('http')
const app = require('./app')
const config = require('./config/env')

function startServer() {
  const server = http.createServer(app)
  server.listen(config.port, () => {
    console.log(`🚀 API server running on port ${config.port}`)
  })

  server.on('error', (error) => {
    console.error('Server error', error)
    process.exit(1)
  })
}

startServer()
