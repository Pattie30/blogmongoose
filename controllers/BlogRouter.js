const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.send(blogs)

    }catch(error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

router.get('/:id', async (req, res)=> {
    try {
        const blog = await BlogModel.findById(req.params.id)
        res.send(blog)
    }catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
 })

router.post('/', async (req, res) => {
    // Create a new blog
   try{
    const newBlog = await BlogModel.create(req.body)
    res.send(newBlog)
    }catch(error){
     console.log(error)
        res.status(403).send('Cannot create')
    }
   
})

router.put('/:id', async(req, res) =>{
    try{
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body,
            {'returnDocument': 'after'})
        res.send(updatedBlog)
        }catch(error){
         console.log(error)
            res.status(403).send('Cannot put')
        }
} )

router.delete('/:id', async(req, res) =>{
    try{
        const deletedBlog = await BlogModel.findByIdAndUpdate(req.params.id)
        console.log(deletedBlog)
        }catch(error){
         console.log(error)
            res.status(403).send('Cannot put')
        }
} )







module.exports = router;


















