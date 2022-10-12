const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
const Blog = require ('./models/BlogSchema')
const User = require ('./models/UserSchema')

const app = express()
const PORT = 3000

app.use(morgan('dev'))
app.use(express.json());

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use('/blog', require('./controllers/BlogRouter'))



app.get('/', (req, res) => {
    res.render('pages/HomePage');
    
})

app.get('/Blogs', (req, res) => {
    Blog.find({}, (error, blogsFromDB) => {
        if (error){
            console.log(error)
        }
        console.log(blogsFromDB)
        res.render('blogs/Index', {blogs: blogsFromDB})
    })
})

















app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,
});



mongoose.connection.once('open', () => {
   console.log('connected to mongo');
})