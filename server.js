const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('../PORTFOLIO'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(8080);