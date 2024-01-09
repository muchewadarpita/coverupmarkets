var express = require('express');
var blogHome = express.Router();

const blogHomeController = require('../controllers/blog_home');

/*
* create Blog Home
*/
blogHome.post("/",upload.single('image'), blogHomeController.createBlogsHome);

/*
* get Blog details by date
*/
blogHome.get("/details", blogHomeController.getBlogDetailsByDate);

module.exports = blogHome;
