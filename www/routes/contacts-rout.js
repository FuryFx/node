const express = require('express');
const {    
     contact,
    contactRedirect
} = require('../controllers/contacts-controller')
const router = express.Router()




router.get('/contacts', contact)
router.get('/us-contacts', contactRedirect)


module.exports = router;