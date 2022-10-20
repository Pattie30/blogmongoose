const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

//Add privacy to this router or routes (cannot access to the blog if not logged in)
//Middleware Function 
router.use((req, res, next) => {
    //if logged in let user access to rest of the content below
    if (req.session?.loggedIn){
        next()
    } else{
        res.redirect('/user/signin')
    }
})

//This file has /blog route as a default
router.get('/', async (req, res) => {
    try{
        const blogs = await BlogModel.find({})
        res.render('Blogs/Blogs', {blogs: blogs, loggedInUser: req.session.username})
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//====Create
//link to create a new blog page
router.get('/new', (req, res)=> {
    try{
        res.render('Blogs/NewBlog')
    } catch(error){
        console.log(error);
        res.status(403).send('Not Found')
    }
})
//POST: create new blog (default /blog)
router.post('/', async (req, res) => {
    try{
        if(req.body.sponsored === 'on'){
            req.body.sponsored = true
        } else{
            req.body.sponsored = false
        }
        //set the author to the logged in user
        req.body.author = req.session.username
        const newBlog = await BlogModel.create(req.body)
        res.redirect('/blog')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

//====Read: get blog by id & SHOW
router.get('/:id', async(req, res) => {
    try{
        const blog = await BlogModel.findById(req.params.id)
        res.render('Blogs/ShowBlog', {blog: blog})
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//====Update
//link to edit blog page
router.get('/:id/edit', async(req, res)=> {
    try{
        const editBlog = await BlogModel.findById(req.params.id)
        res.render('Blogs/EditBlog', {blog: editBlog})
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//put: update by id
router.put('/:id', async(req, res) => {
    try{
        if(req.body.sponsored === 'on'){
            req.body.sponsored = true
        } else{
            req.body.sponsored = false
        }
        //find id,update body, after the update return doc you updated
        const id= req.params.id
        await BlogModel.findByIdAndUpdate(id, req.body, {'returnDocument':'after'})
        res.redirect(`/blog/${id}`)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

//====Delete 
router.delete('/:id', async(req,res) => {
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog);
        res.redirect('/blog')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    } 
})


module.exports = router