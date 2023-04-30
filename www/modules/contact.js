const mongoose = require('mongoose')

const Shema = mongoose.Schema;

const ContactShema = new Shema({
 name : {type: String, required: true},
 link : {type: String, required: true},
});


const Contact = mongoose.model('Contact', ContactShema)

module.exports = Contact;