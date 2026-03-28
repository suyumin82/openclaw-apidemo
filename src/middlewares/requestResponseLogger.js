const config = require('../config/env')

function sanitizeBody(body) {
  if (body === undefined) return undefined
  if (body === null) return null
  if (typeof body === 'string') return body.length > 2000 ? `${body.slice(0, 2000)}...<truncated>` : body

  try {
    const json = JSON.stringify(body)
    if (json.length > 4000) {
      return JSON.parse(`${json.slice(0, 4000)}"`)
    }
    return body
  } catch {
    return '[unserializable body]'
  }
}

function requestResponseLogger(req, res, next) {
  if (!config.enableRequestResponseLogging) {
    return next()
  }

  const startedAt = Date.now()
  const requestMeta = {
    method: req.method,
    path: req.originalUrl || req.url,
    query: req.query,
    params: req.params,
    body: sanitizeBody(req.body),
    ip: req.ip,
  }

  console.log('[http:request]', requestMeta)

  const originalJson = res.json.bind(res)
  const originalSend = res.send.bind(res)
  let responseBody

  res.json = (body) => {
    responseBody = body
    return originalJson(body)
  }

  res.send = (body) => {
    responseBody = body
    return originalSend(body)
  }

  res.on('finish', () => {
    console.log('[http:response]', {
      method: req.method,
      path: req.originalUrl || req.url,
      statusCode: res.statusCode,
      durationMs: Date.now() - startedAt,
      body: sanitizeBody(responseBody),
    })
  })

  next()
}

module.exports = requestResponseLogger
