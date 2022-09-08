const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogController')

router.get('/blogs', blogsController.blog_index)

router.post('/blogs/create', blogsController.createBlogPost)

router.get('/blogs/create', blogsController.createBlogGet);

router.get('/blogs/:id', blogsController.blogDetails)

router.delete('/blogs/:id', blogsController.deleteBlog)


//export the router
module.exports = router;