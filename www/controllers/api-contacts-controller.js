const Contact = require('../modules/contact')
const raed = require('../helpers/modulePath')


const Erorr = (res, er) => {
   res.status(500).send(er.message)
}

const contact = (req,res) => {
   Contact
   .find()
   .then((social) => res.status(200).json(social))
   .catch((er) =>  Erorr(res, er))
}





module.exports = {
    contact,
}

