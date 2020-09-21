const express = require('express')
const path = require('path')  
const viewsPath = path.join(__dirname,'../templates/views')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()
const partialsPath = path.join(__dirname,'../templates/partials')

//define path for express config
//setup views handle bars
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

const PublicDirectoryPath = path.join(__dirname,'../public')

// set up static direcotry to use
app.use(express.static(PublicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Aravind'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Us',
        name: 'Aravind'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Need help?',
        name: 'Aravind'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'no location entered'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})

        }
        forecast(latitude,longitude,(error, forecastData)=>{
            if(error){
                res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })

})

app.get('/products',(req, res)=>{
        if (!req.query.search) {
           return res.send({
                error:'you must provide a search term'
            })
        

        }
        res.send({
        products:[]
    })

})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: 'The Page you are looking for doenst exist',
        name: 'Aravind'
    })

})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'The page you are looking for does not exist :)',
        name: 'Aravind'
    
    })
    
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})