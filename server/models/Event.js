const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    category: String,
    location: {
      venue: String,
      city: String,
      country: String,
      address: String,
      mapLink: String,
    },
    date: {
      start: Date,
      end: Date,
    },
    price: {
      currency: String,
      amount: Number,
    },
    availableSeats: Number,
    organizer: {
      name: String,
      contactEmail: String,
      phone: String,
    },
    tags: [String],
    status: { type: String, default: 'active' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
