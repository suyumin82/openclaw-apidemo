const express = require('express')
const healthRoutes = require('./health.route')
const helloRoutes = require('./hello.route')

const router = express.Router()

router.use('/health', healthRoutes)
router.use('/helloworld', helloRoutes)

module.exports = router
