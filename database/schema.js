const mongoose = require('mongoose')
const MongoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },
    Dateofreg: {
        type: String,
        default: new Date
    }
})

module.exports = mongoose.model('reg_scheme', MongoSchema)