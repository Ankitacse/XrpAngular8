const express = require('express');
const app = express();
const transactionRoutes = express.Router();
// Require Business model in our routes module
let Transaction = require('../models/Transaction');
// Defined store route
transactionRoutes.route('add').post((req, res)=>{
    let transaction = new Transaction(req.body);
    transaction.save()
        .then(transaction => {
            res.status(200).json({ 'transaction': 'transaction in added successfully' });
            console.log("hii");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
            console.log("bye");
        });
});

// Defined get data(index or listing) route
transactionRoutes.route('/').get(function (req, res) {
    Transaction.find(function (err, transaction) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(transaction);
        }
    });
});

// Defined edit route
transactionRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Transaction.findById(id, function (err, transaction) {
        res.json(transaction);
    });
});

//  Defined update route
transactionRoutes.route('/update/:id').post(function (req, res) {
    Transaction.findById(req.params.id, function (err, next, transaction) {
        if(!transaction)
            return next(new Error('Could not load Document'));
        else {
            transaction.generateAddress = req.body.generateAddress;
            transaction.generateNickName = req.body.generateNickName;
            transaction.generatePhrase = req.body.generatePhrase;

            transaction.save().then(transaction => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
transactionRoutes.route('/delete/:id').get(function (req, res) {
    Transaction.findByIdAndRemove({ _id: req.params.id }, function (err, transaction) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = transactionRoutes;
