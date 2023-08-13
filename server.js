const express = require('express')
const cors = require('cors')
const PORT = process.env.MONGOPORT || 3001
const db = require('./db/db')
const { Artist } = require('./models/index')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is the Sad Dads root!')
})
app.get('/artists', async (req, res) => {
    const artists = await Artist.find({})
    res.json(artists)
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})