const express = require('express')
const server = express()

// Public Folder Configuration
server.use(express.static('public'))

// Configuring Application Routes
server.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html')
})

// Turning Server On
server.listen(3000)