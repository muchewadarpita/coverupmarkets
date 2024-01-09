// MongoDB Model
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const BlogHome = require('../models/blog_home');
const HttpError = require('../utilities/HttpError');
let { errorMessages } = require('../utilities/constants');
const multer = require('multer');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
// const demo = require('../utilities/images/demo.jpg')

async function createBlogHome(blog_details) {
    try {

        // Initialize GridFS stream
        let gfs;
        const conn = mongoose.connection;
        conn.once('open', () => {
            gfs = Grid(conn.db, mongoose.mongo);
            gfs.collection('uploads');
        });

        // Multer setup for handling file uploads
        const storage = multer.memoryStorage();
        const upload = multer({ storage: storage });

        const blogHome = new BlogHome({
            date: blog_details.date,
            fiiData: blog_details.fiiData,
            diiData: blog_details.diiData,
            indexOfStocks: blog_details.indexOfStocks,
            weekImg: blog_details.file.filename,
            weekDesc: blog_details.weekDesc,
            openIntrestDesc: blog_details.openIntrestDesc,
            newsOnMarketDesc: blog_details.newsOnMarketDesc,
            expirySpecialDesc: blog_details.expirySpecialDesc,
        });

        // Create write stream to store image file in GridFS
        const writeStream = gfs.createWriteStream({
            filename: blog_details.file.filename,
            mode: 'w',
            content_type: blog_details.file.mimetype,
        });

        // Pipe the file data to GridFS
        writeStream.write(blog_details.file.buffer);
        writeStream.end();

        var type = await blogHome.save();

        console.log(`blog inserted in DB: ${type._id}`);
        return { upsertId: type._id, status: 'inserted', type: type._doc };

    } catch (e) {
        throw new HttpError(e.message || errorMessages(data).CANNOT_CREATE_ENTRY, e.statusCode || 422);
    }
}

/*
* Return the blog details based on date
*/
async function getBlogHomeByDate(date) {

    try {
        const filter = {};
        if (date) {
            // Create a date range for the entire day (from midnight to the end of the day)
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0); // Set to midnight

            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999); // Set to end of the day

            // Use $gte (greater than or equal) and $lte (less than or equal) operators
            filter.date = { $gte: startOfDay, $lte: endOfDay };
        }
        const blogHome = await BlogHome.find(filter)
        const mappedResults = blogHome.map((blog_details) => {
            return {
                date: blog_details.date,
                fiiData: blog_details.fiiData,
                diiData: blog_details.diiData,
                indexOfStocks: blog_details.indexOfStocks,
                weekImg: blog_details.weekImg,
                weekDesc: blog_details.weekDesc,
                openIntrestDesc: blog_details.openIntrestDesc,
                newsOnMarketDesc: blog_details.newsOnMarketDesc,
                expirySpecialDesc: blog_details.expirySpecialDesc,

            };
        });

        return {
            "data": mappedResults,
        }

    } catch (e) {
        throw new HttpError(e.message || errorMessages(data).CANNOT_GET_DATA_FROM_DB, 404);
    }
}


module.exports = {
    createBlogHome,
    getBlogHomeByDate
}  