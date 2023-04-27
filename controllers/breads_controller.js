//dependencies
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//index
breads.get('/', (req, res) => {
    Bread.find()
    .then(foundBreads => {
        res.render('Index',
        {
            breads: foundBreads,
            title: 'Index Page'
        })
    })
})

//new
breads.get('/new', (req, res) => {
    res.render('New')
})

//edit
breads.get('/:indexArray/edit', (req, res) => {
    res.render('Edit', {
        bread: Bread[req.params.indexArray],
        index: req.params.indexArray
    })
})

//show
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
        res.render('Show', {
            bread: foundBread
        })
    })
    .catch(err => {
        res.render('error404')
    })
})

//create
breads.post('/', (req, res) => {
    if(!req.body.image) {
        req.body.image = undefined
    }
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGlten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})

//delete
breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})

//update
breads.put('/:indexArray', (req, res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGlten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

module.exports = breads  