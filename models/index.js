const mongoose = require('mongoose')
const artistSchema = require('./Artist')
const concertSchema = require('./Concert')
const venueSchema = require('./Venue')

const Artist = mongoose.model('Artist', artistSchema)
const Concert = mongoose.model('Concert', concertSchema)
const Venue = mongoose.model('Concert', venueSchema)

module.exports = {
    Artist,
    Concert,
    Venue
}