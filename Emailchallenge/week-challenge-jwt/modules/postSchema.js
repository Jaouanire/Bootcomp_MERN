const mongoose = require('mongoose');
 // Define  Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    paragraph: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
 // Define Product Model
const Posts = mongoose.model('Posts', postSchema);






module.exports = Posts;