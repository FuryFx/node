const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();

const port = 3000
const host = 'localhost'
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

let raed = (red) => path.resolve('views', `${red}.html`)

app.get('/', (req, res) => {
    res.status(200)
    res.sendFile(raed('index'))
})

app.get(' ', (req, res) => {
    res.status(301)
    res.redirect('index')
})

app.get('/add-post', (req, res) => {
    res.status(200)
    res.sendFile(raed('add-post'))
})

app.get('/add', (req, res) => {
    res.status(301)
    res.redirect('/add-post')
})

app.get('/posts/:title/:id', (req, res) => {
    res.status(200)
    res.sendFile(raed('post'))
})

app.get('/posts', (req, res) => {
    res.status(200)
    res.sendFile(raed('posts'))
})

app.get('/postss', (req, res) => {
    res.status(301)
    res.redirect(raed('posts'))
})

app.get('/pos', (req, res) => {
    res.status(301)
    res.redirect(raed('posts'))
})

app.use( (req, res) => {
    res.status(404)
    res.sendFile(raed('error'))
})

app.listen(port, host, (er) => {  
er ? console.log(`${er} server error`) : console.log(`http://${host}:${port}`)
})