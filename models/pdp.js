
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define schema and collection for items
var pdp = new Schema({
    kapital: {
        type: Number
    },
    honorarium: {
        type: Number
    }
},{
    collection: 'pdp'
});

module.exports = mongoose('pdp', pdp);