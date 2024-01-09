const mongoose = require('mongoose');

async function createConnection() {
    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/coverup_markets_db',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Mongo DB connected");
    } catch (e) {
        console.error('Error connecting to MongoDB:', e.message);
        // Handle error appropriately, e.g., throw an error or perform other actions
    }
}


module.exports = createConnection;
