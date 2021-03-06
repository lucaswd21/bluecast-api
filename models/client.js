const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  value: {
    type: String,
    required: [true, 'Value field is required']
  },
  date: {
    type: String,
    required: [true, 'Date field is required']
  },
});

const Client = mongoose.model('client', ClientSchema);

module.exports = Client;