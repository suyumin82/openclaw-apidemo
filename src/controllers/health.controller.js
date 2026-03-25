const config = require('../config/env')

function getHealth(req, res) {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    environment: config.env,
    timestamp: new Date().toISOString(),
  })
}

module.exports = { getHealth }
