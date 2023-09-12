const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for express config
const parentRouteDirectory = path.join(__dirname , '../public')
const viewPath = path.join(__dirname , '../templates/views')
const partialsPath = path.join(__dirname , '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine' , 'hbs')
app.set('views' , viewPath)
hbs.registerPartials(partialsPath)

// Setup Static Directory to serve
app.use(express.static(parentRouteDirectory))

app.get('' , (req , res) =>{
    res.render('index' , {
        title : 'Weather App' ,
        name : 'Jeet Jani'
    })
})

app.get('/about'  , (req , res) => {
    res.render('about' , {
        title : 'Weather App' ,
        name : 'Jeet Jani'
    })
})

app.get('/help' , (req , res) => {
    res.render('help' , {
        message : "This is some helpful text" ,
        title : 'Help Page' ,
        name : 'Jeet Jani'
    })
})

app.get('/weather' , (req , res) => {
    if(!req.query.address){
        return res.send({
            error : "Address query is required"
        })
    }
    geocode(req.query.address , (error , {longitude , latitude , location} = {}) =>{
        if(error){
            return res.send({
                error
            })
        }
        forecast(longitude , latitude , (error ,  forecast_ ) =>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                location ,
                forecast : forecast_ ,
                address : req.query.address
            })
        })
    })
    
})

app.get('/help/*' , (req , res) => {
    res.render('notFound',{
        title : '404' ,
        errorMessage : 'Help Article Not Found' ,
        name : 'Jeet Jani'
    })
})

app.get('/products' , (req , res) =>{
    if(!req.query.search){
        return res.send({
            error : 'You must have search query'
        })
    }
    console.log(req.query)
    res.send({
        products : []
    })
})

app.get('*' , (req , res) =>{
    res.render('notFound',{
        title : '404' ,
        errorMessage : 'Page Not Found' ,
        name : 'Jeet Jani'
    })
})

app.listen(3000 , (req , res)=>{
    console.log('Server is up on port 300')
})