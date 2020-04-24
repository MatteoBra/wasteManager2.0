const mongoose = require('mongoose');

//how my data should looks like

const TransactionSchema = new mongoose.Schema({
    text: {
        type:String,
        trim:true,
        required:[true, 'Text required'] //message when nothing is submitted
    },
    amount: {
        type:Number,
        trim:true,
        required:[true, 'Valid number required']
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Transaction' , TransactionSchema);