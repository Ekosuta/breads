//dependencies
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

//index
breads.get('/', (req, res) => {
    Baker.find()
    .then(foundBakers => {
        Bread.find()
        .then(foundBreads => {
            res.render('Index',
            {
                breads: foundBreads,
                title: 'Index Page',
                bakers: foundBakers
            })
        })    
    })
})

//new
breads.get('/new', (req, res) => {
    Baker.find()
    .then(foundBakers => {
        res.render('New', {
            bakers: foundBakers
        })
    })
})

//edit
breads.get('/:id/edit', (req, res) => {
    Baker.find()
    .then(foundBakers => {
        Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('Edit', {
                bread: foundBread,
                bakers: foundBakers
            })
        })    
    })
    
})

//show
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .populate('baker')
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
    .then(() => {
        res.redirect('/breads')
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

//delete
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
        res.status(303).redirect('/breads')
    })
})

//update
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGlten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(updatedBread => {
        console.log(updatedBread)
        res.redirect(`/breads/${req.params.id}`)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

//seed
breads.get('/data/seed', (req, res) => {
    Bread.insertMany([
        {
          name: 'Rye',
          hasGluten: true,
          image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
          name: 'French',
          hasGluten: true,
          image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        },
        {
          name: 'Gluten Free',
          hasGluten: false,
          image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        },
        {
          name: 'Pumpernickel',
          hasGluten: true,
          image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        }
    ])
    .then(createdBreads => {
        res.redirect('/breads')
    })
})

module.exports = breads  