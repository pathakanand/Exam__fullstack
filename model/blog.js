const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: String,
    Class: String,
    blog: String,
    brand: String, 
    price: String, 
    stamp: String, 
    blogId: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
