const express = require('express')
const app = express()
require('dotenv/config')

const PORT = process.env.PORT

let data = { name: 'Some' }

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

app.use(express.json())

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

app.get('/', (req, res) => {
    res.json(data)
})

app.post('/', (req, res) => {
    const newProduct = req.body
    console.log(newProduct)
    res.send('got it')
})

//
// ─── LISTENING ON PORT ──────────────────────────────────────────────────────────
//

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})
