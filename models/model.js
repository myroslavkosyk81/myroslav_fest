var mongoose = require("mongoose");

var ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  // last_name: {
  //   type: String,
  //   index: true,
  //   required: true
  // },
  // phone: {
  //   type: Number,
  //   index: true,
  //   required: true
  // },
  // email: {
  //   type: String,
  //   index: true,
  //   required: true
  // },
  film: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    index: true,
    required: true
  },
  place: {
    type: Number,
    index: true,
    required: true
  }
}, {timestamps: true});

var Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket
