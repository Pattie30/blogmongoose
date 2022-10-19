const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(morgan('dev'))
app.use(express.json());

app.use('/blog', require('./controllers/BlogRouter'))



app.get('/', (req, res) => {
    res.send('Hello')
})

https://vsp.wd1.myworkdayjobs.com/en-US/VSPVisionCareers/job/Remote-US/Apprentice-Software-Engineer_R-2435?jobPipeline=Indeed















app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,
});



mongoose.connection.once('open', () => {
   console.log('connected to mongo');
})
