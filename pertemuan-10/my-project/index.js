const express = require('express')
const app = express()
const port = 3000

// setup template engine with ejs
app.set('view engine', 'ejs')


// server static file from folder assets and url/address /assets before find assets
app.use('/assets', express.static('assets'));

// app.get('/', (req, res) => res.send('Hello Fajrul, Welcome in ExpressJs and Nodemon'))
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/profile', (req, res) => {
    let data = req.params
    res.render('profile')
})

app.get('/article', (req, res) => {
    res.render('article')
})

// app.get('/about', (req,res) => res.send('About page'))
// app.get('/contact', (req,res) => res.send('Contact page'))


// app.get('/article', (req,res) => {
//     res.send(`Article page category:${req.query.category}, title: ${req.query.title}`)
// })

// app.get('/profile/:name/:age', (req,res) => {
//     res.send(`Profile page name: ${req.params.name}, age: ${req.params.age}`)
// })

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`))