const db = require('../db')
const { Artist, Concert, Venue } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const artists = []
    await Artist.deleteMany()
    await Artist.insertMany(artists)
    console.log('Created artists.')
    const concerts = []
    await Concert.deleteMany()
    await Concert.insertMany(concerts)
    console.log('Created concerts.')
    const venues = []
    await Venue.deleteMany()
    await Venue.insertMany(venues)
    console.log('Created venues.')
}

const run = async () => {
    await main().catch(console.error)
    db.close()
}
run()