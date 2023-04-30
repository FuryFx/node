const Contact = require('../modules/contact')
const raed = require('../helpers/modulePath')


const Erorr = (res, er) => {
    console.log(`${er}`);
    res.render(raed('error'), {title: 'error'})
}

const contact = (req,res) => {
    const title = 'contacts';
    res.status('200')
   Contact
   .find()
   .then((social) => res.render(raed('contacts'), {title, social}))
   .catch((er) =>  Erorr(res, er))
}


const contactRedirect = (req,res) => {
    const title = 'contacts';
    res.status('301')
    res.redirect('/contacts')
}



module.exports = {
    contact,
    contactRedirect
}

