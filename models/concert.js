const { Schema } = require('mongoose')
const concertSchema = new Schema(
    {
        concert_day: { type: String },
        lineup: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
        // lineup: { type: Array },
        attendees: { type: Number },
        ticket_price: { type: Number },
        venue_id: { type: Schema.Types.ObjectId, ref: 'Venue' },
        set_list: { type: Array },
        album_tour: { type: String },
    },
    { timestamps: true }
)
module.exports = concertSchema