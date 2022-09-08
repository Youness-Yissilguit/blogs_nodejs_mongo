const express = require('express');
const aboutRoutes = express.Router();


aboutRoutes.get('/about', (request, res)=>{
    // res.send('<p>text></p>');
    res.render('about')
});
//redirect 
aboutRoutes.get('/about-me', (request, res)=>{
    res.redirect('/about');
});

module.exports = aboutRoutes;