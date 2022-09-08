const express = require('express');//nodejs framework
const { result } = require('lodash');
const app = express();//create an instance of the express class
const mongoose = require('mongoose');//third party library
//Import routes
const blogsRoutes = require('./routes/BlogRoutes');
const aboutRoutes = require('./routes/AboutRoutes');
//connect to mongo database
const dbURL = 'mongodb+srv://admin:passroot@tutorial.9nv6qeq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURL)
    .then((result)=>{
        console.log("db connected");
        //listning to server
        app.listen(3000);
    })
    .catch((err)=>{
        console.log(err)
    });

//register view engine
app.set('view engine', 'ejs');

//app.set('views', './path');//to set an new folder to save views

//midleware static files
app.use(express.static('assets'));
//get the paramse from request as an object
app.use(express.urlencoded({ extended: true }));

 
//Blog routes 
app.use(blogsRoutes);//app.use('/blogs', blogsRoutes);//mean shodl handle that root just after /blogs

//About routes
app.use(aboutRoutes);


//error 404 should be on the bottom of the file
app.use((request, res)=>{
    res.status(404).render('404')
})