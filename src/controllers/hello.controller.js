function getHello(req, res) {
  const rawName = typeof req.query.name === 'string' ? req.query.name : ''
  const trimmed = rawName.trim()
  const target = trimmed.length > 0 ? trimmed : 'World'

  res.status(200).json({ message: `Hello ${target}` })
}

module.exports = { getHello }
