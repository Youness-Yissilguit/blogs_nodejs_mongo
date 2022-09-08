const mongoose = require('mongoose');//third party library
const Schema = mongoose.Schema;

//create the collection schema
const blogsSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    snippet: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

//create the model
const Blog = mongoose.model('Blog', blogsSchema, 'blogs');

module.exports = {
    Blog
}