// Required Modules
require('dotenv').config()
require('dotenv')
require('./models') // Connect to MongoDB
const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')
const API_KEY = process.env.API_KEY
const Documenu = require('documenu')
Documenu.configure(API_KEY)

// Variables
const app = express()
const PORT = process.env.PORT || 8000
const rowdyResults = rowdy.begin(app)

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
// Initialize passport
app.use(passport.initialize())

// Controllers
app.use('/auth', require('./controllers/authController'))
app.use('/exampleResource', require('./controllers/exampleResource'))
app.use('/users', require("./controllers/favoritesController"))

// Routes
app.get('/', (req, res) => {
    res.json({ msg: 'Hello world!' })
})

app.get('/restaurants/:zipcode', async (req, res) => {
    try {
        let response = await Documenu.Restaurants.getByZipCode(req.params.zipcode) 
        res.json({ restaurants: response.data })
        console.log(`restaurants: ${response.data}`)
    } catch (error) {
        console.log(error)
    }
})

// Listen!
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server listening on port ${PORT} 🌊`)
})