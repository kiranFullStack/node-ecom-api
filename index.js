const express = require('express')
const app = express()
require('dotenv/config')

const PORT = process.env.PORT

let data = { name: 'Some' }

app.use(express.json())

app.get('/', (req, res) => {
    res.json(data)
})

app.post('/', (req, res) => {
    const newProduct = req.body
    console.log(newProduct)
    res.send('got it')
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})
