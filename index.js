const express = require('express')
const app = express()
require('dotenv/config')

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('HI FROM THE SERVER!')
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})
