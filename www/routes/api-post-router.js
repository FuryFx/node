const express = require('express');
const {
    getPost,
    deletepost,
    putPost,
    addPost,
    Posts,
} = require('../controllers/api-post-controller')
const router = express.Router();


router.get('/api/posts', Posts)

router.post('/api/post/', addPost)

router.get('/api/post/:id', getPost)

router.delete('/api/post/:id', deletepost)

router.put('/api/post/:id', putPost)



module.exports = router;