const express = require('express');
const {
    getPost,
    deletepost,
    getEditPost,
    putPost,
    addPost,
    Posts,
    postAll
} = require('../controllers/post-controller')
const router = express.Router();




// api router start
router.get('api/add-post', postAll)
router.get('/posts/:id', getPost)
router.delete('/posts/:id', deletepost)
router.get('/edit/:id', getEditPost)  
router.put('/edit/:id', putPost)
router.post('/add-post', addPost)
router.get('/posts', Posts)
//   api router end


// local router start
router.get('/add-post', postAll)
router.get('/posts/:id', getPost)
router.delete('/posts/:id', deletepost)
router.get('/edit/:id', getEditPost)  
router.put('/edit/:id', putPost)
router.post('/add-post', addPost)
router.get('/posts', Posts)
//   local router end  

module.exports = router;