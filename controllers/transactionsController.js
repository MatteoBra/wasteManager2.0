const Transaction = require('../models/Transaction')

//all methods here

// @desc Get all transactions
//@route GET/api/v1/transactions

exports.getTransactions = async (req,res,next) => { //promise from mongoose db
    try {
        const transactions = await Transaction.find(); //get

        return res.status(200).json({
            success:true,
            count: transactions.length,
            data: transactions //my data
        })
    } catch (err) {
        return res.status(500).json({
            success:false,
            error: 'Server Error'
        })
    }
}

// @desc Add all transactions
//@route Post/api/v1/transactions

exports.addTransaction = async (req,res,next) => {
    try {
        const {text, amount} = req.body; //from form

        const transaction = await Transaction.create(req.body);
        console.log(req.body)
    
        return res.status(201).json({ //status 201 ok
            success:true,
            data:transaction
        })        
    } catch (err) {
        if (err.name == 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message); //return messages from Model Transaction

            return res.status(400).json({
                success:false,
                error:messages
            })
        }else{
            return res.status(500).json({
                success:false,
                error: 'Server Error'
            })
        }
    }

}

// @desc delete all transactions
//@route GET/api/v1/transactions/:id

exports.deleteTransaction = async (req,res,next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        
        if(!transaction) { //doesn't exit => get error
            return res.status(404).json({
                success:false,
                error:'No transaction found'
            });
        }
        await transaction.remove();

        return res.status(200).json({
            success:true,
            data:{}
        })
    } catch (err) {
        return res.status(500).json({
            success:false,
            error: 'Server Error'
        })
    }
}