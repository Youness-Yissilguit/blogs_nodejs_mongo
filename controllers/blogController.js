//includes blog model
const Blogs = require('../models/Blog').Blog;


//bog index controller
const blog_index = (request, res) =>{
    Blogs.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {
            blogs: result, 
            title: 'Hompage'
        });
    })
    .catch(err=>console.log(err))
/*res.sendFile('./views/index.html', {
    root: __dirname
});*/
}

const createBlogPost = (request, res) =>{
    let title = request.body['title'];
    let snippet = request.body['snippet'];
    let body = request.body['body'];
    if(title == '' || snippet == '' || body == ''){
        res.render('createBlog', {
            error: "field shouldn't be empty"
        });
    }else{
        const blog = new Blogs({//const blog = new Blogs(request.body)
            title: title,
            snippet: snippet, 
            body: body
        });
        blog.save()
            .then((result)=>{
                console.log('blog added');
                res.redirect('/blogs')
            })
            .catch(err=>console.log(err));
    }
}

const createBlogGet = (request,res) =>{
    res.render('createBlog');
}

const blogDetails = (request, res) =>{
    const id = request.params.id;
    Blogs.findById(id)
        .then((result)=>{
            res.render('blog', {
                blog: result
            })
        })
}

const deleteBlog = (request, res) =>{
    const id = request.params.id;
    Blogs.findByIdAndDelete(id)
    .then((result)=>{
        res.json({ redirect: '/blogs'})
    })
    .catch(err=>console.log(err));
}

module.exports = {
    blog_index, 
    createBlogPost, 
    createBlogGet, 
    deleteBlog, 
    blogDetails
}