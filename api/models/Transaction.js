const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Transaction = new Schema({
    generateAddress: {
    type: String
  },
  generateNickName: {
    type: String
  },
  generatePhrase : {
    type: Number
  }
}, {
    collection: 'Transaction'
  });

module.exports = mongoose.model('Transaction', Transaction);