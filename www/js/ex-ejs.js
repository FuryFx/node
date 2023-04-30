const express = require('express');
const fs = require('fs')
const os = require('os')
const morgan = require('morgan')
const met = require('method-override')
require('dotenv').config()
const mongoose = require('mongoose')
const postRoutes = require('../routes/post-routes')
const conteRoutes = require('../routes/contacts-rout')
const ApipostRoutes = require('../routes/api-post-router')
const ApiconteRoutes = require('../routes/api-contacts-router')
const raed = require('../helpers/modulePath')


const app = express();
const host = 'localhost'
const db = process.env.mongo_db
port = process.env.port|| 3000


app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(morgan(':method :url :status :res[content-lenght] - :response-time ms'))
app.use(met('_method'))

  async function b(){
  try {
    await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('bd connected it is good!')
    console.log('bd connected active stream')
  } catch (e) {
    console.log(`connect bd error \n ${e}`)
  }
   }

// промежуточное по использукется для перехвата данных между рендером страници и ответом от сервера
// app.use( (req, res, next ) => {
//     console.log('-----------start info\n')
//     console.log(`path : ${req.path}`)
//     console.log(`path method : ${req.method}`)
//     console.log(`os platform : ${os.platform}`)
//     console.log(`os arch: ${os.arch}`)
//     console.log(`proccess pid : ${process.pid}`)
//     console.log(`path resole : ${path.resolve(__filename)}`)
//     console.log('\n-----------end info')
//     next();
// })


app.get('/', (req, res) => {
    const title = 'blog';
    res.status('200')
    res.render(raed('index'), {title})
})


app.get(' ', (req, res) => {
    res.status('301')
    res.redirect('index')
})

app.get('/add', (req, res) => {
    res.status('301')
    res.redirect('/add-post')
})

app.get('/postss', (req, res) => {
    res.status('301')
    res.redirect(raed('posts'))
})

app.get('/pos', (req, res) => {
    res.status('301')
    res.redirect(raed('posts'))
})


app.use(postRoutes)
app.use(conteRoutes)
app.use(ApipostRoutes)
app.use(ApiconteRoutes)


app.use( (req, res) => {
    const title = 'error server'
    res.status('404')
    res.render(raed('error'), {title})
})


app.listen(port, host, (er) => {  
er ? console.log(`${er} server error`) : console.log(`http://${host}:${port}`)
b();
})
