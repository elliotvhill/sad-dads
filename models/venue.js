const { Schema } = require('mongoose')
const venueSchema = new Schema(
    {
        venue: { type: String, required: true },
        location: { type: String, required: true },
        capacity: { type: Number },
        url: { type: String },
        description: { type: String },
        imageUrl: { type: String }
    },
    { timestamps: true }
)
module.exports = venueSchema