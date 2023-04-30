const Post = require('../modules/post')
const raed = require('../helpers/modulePath')

const Erorr = (res, er) => {
    console.log(`${er}`);
    res.render(raed('error'), {title: 'error'})
}


const  getPost = (req, res) => {
    const title = 'post';
    Post
   .findById(req.params.id)
   .then((post) => res.render(raed('post'), {post, title}))
   .catch((er) => Erorr(res, er))
};


const  deletepost = (req, res) => {
    const title = 'post';
    Post
   .findByIdAndDelete(req.params.id)
   .then((result) => {
    res.sendStatus(200);
   })
   .catch((er) => Erorr(res, er))
};


const getEditPost = (req, res) => {
    const title = 'edit post';
    Post
   .findById(req.params.id)
   .then((post) => res.render(raed('edit-post'), {post, title}))
   .catch((er) =>Erorr(res, er))
}



const addPost = (req, res) => {
    const {title, author, text} = req.body;
    const post = new Post({title, author, text});
    post
    .save()
     .then((result) => res.redirect('/posts'))
     .catch((er) => Erorr(res, er))
}


const putPost = (req, res) => {
    const {title, author, text} = req.body;
    const {id} = req.params;
    Post
    .findByIdAndUpdate(id, {title, author, text})
   .then((result) => res.redirect(`/posts`))
   .catch((er) => Erorr(res, er))
}


const Posts = (req, res) => {
    const title = 'posts'
    Post 
    .find()
    .sort({ createdAt: -1})
    .then((posts) => res.render(raed('posts'), {title, posts}))
    .catch((er) => Erorr(res, er))
}


const postAll = (req,res) => {
    const title = 'post-create';
    res.status('200')
    res.render(raed('add-post'), {title})
}


module.exports = {
    getPost,
    deletepost,
    getEditPost,
    Posts,
    putPost,
    addPost,
    postAll
}