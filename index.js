const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('HI FROM THE SERVER!')
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})
