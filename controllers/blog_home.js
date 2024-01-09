const { createBlogHome, getBlogHomeByDate } = require('../services/blog_home');
let { successMessages, errorMessages } = require('../utilities/constants');


/*
* create new blog 
*/
async function createBlogsHome(req, res) {
    const data = req.body;
    try {
        const result = await createBlogHome(data);
        return res.status(200).json({ message: successMessages().DATA_WRITTEN_SUCCESSFULLY });
    } catch (e) {
        console.log(e);
        return res.status(e.statusCode || 500).json({ message: e.message || errorMessages(data).CANNOT_UPDATE_ENTRY });
    }
}

/*
* Return blog deatils
*/
async function getBlogDetailsByDate(req, res) {
    try {
        const date = req.query.date;

        if (!date) {
            return res.status(400).json({ err: errorMessages().PROVIDE_NECESSARY_DETAILS });
        }

        const blogDetails = await getBlogHomeByDate(date);
        return res.status(200).json(blogDetails);
    } catch (e) {
        console.log(e);
        return res.status(e.statusCode || 500).json({ message: e.message || errorMessages(data).CANNOT_GET_DATA_FROM_DB });
    }
}

module.exports = {
    createBlogsHome,
    getBlogDetailsByDate
}