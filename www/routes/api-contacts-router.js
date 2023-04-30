const express = require('express');
const {    
     contact,
} = require('../controllers/api-contacts-controller')
const router = express.Router()




router.get('/api/contacts', contact)



module.exports = router;