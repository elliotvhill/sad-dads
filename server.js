const express = require('express')
const cors = require('cors')
const PORT = process.env.MONGOPORT || 3001
const db = require('./db/db')
const { Artist, Concert, Venue } = require('./models/index')

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
app.get('/artists/:id', async (req, res) => {
    const { id } = req.params
    const artist = await Artist.findById(id)
    res.json(artist)
})
app.get('/concerts', async (req, res) => {
    const concerts = await Concert.find({})
    res.json(concerts)
})
app.get('/concerts/:id', async (req, res) => {
    const { id } = req.params
    const concert = await Concert.findById(id)
    res.json(concert)
})
app.get('/venues', async (req, res) => {
    const venues = await Venue.find({})
    res.json(venues)
})
app.get('/venues/:id', async (req, res) => {
    const { id } = req.params
    const venue = await Venue.findById(id)
    res.json(venue)
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})