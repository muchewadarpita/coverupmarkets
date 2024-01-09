const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogHomeSchema = new Schema({
    date: { type: Date, default: Date.now },
    fiiData: { type: String, required: true },
    diiData: { type: String, required: true },
    indexOfStocks: [{
        stock_name: { type: String, required: true, unique: true },
        support_value: { type: String, required: true },
        current_value: { type: String, required: true },
        resistance_value: { type: String, required: true }
    }],
    weekImg: { type: String, required: true },
    weekDesc: { type: String },
    openIntrestDesc: { type: String },
    newsOnMarketDesc: { type: String },
    expirySpecialDesc: { type: String },
});

const blogHomeModel = mongoose.model('blog_home', blogHomeSchema);

module.exports = blogHomeModel;
