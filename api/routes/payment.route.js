 const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const axios = require('axios');
const RippleAPI = require('ripple-lib').RippleAPI;
var keypairs = require('ripple-keypairs');
const config = require('./env');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var port = 8081;
var con = mysql.createConnection(config);
const testServer = 'https://faucet.altnet.rippletest.net';
const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233' // Public rippled server hosted by Ripple, Inc. / wss://s1.ripple.com
});

api.on('error', (errorCode, errorMessage) => {
  console.log(errorCode + ': ' + errorMessage);
});


app.post(`/register`, function(req, user){
    var phone = req.body.phone;
    var name = req.body.name;
    var password = req.body.password;
    // will register
    con.query(`SELECT * FROM user WHERE phone='${phone}'`, function (err, result) {
        if(err){
            console.log(err);
            return;
        }
        if (result.length > 0) {
            user.json({ "msg": "username is already exist", success: false });
        } else {
            var sql = `INSERT INTO user (name, phone, password) VALUES ('${name}', '${phone}', '${password}')`;
            con.query(sql, function (err, result) {
                if (err) {
                    user.json({ "msg": "New data insert error:"+err, success: false });
                } else {
                    // registered user returm
                    axios.post(`${testServer}/accounts`).then((res) => {
                        var address = res.data.account.address;
                        var secret = res.data.account.secret;
                        var balance = res.data.balance
                        
                        var keypair = keypairs.deriveKeypair(secret);
                        var privateKey = keypair.privateKey;
                        var publicKey = keypair.publicKey;
                        // mysql update user query
                        var sql = `UPDATE user SET balance='${balance}', ripple_address='${address}', ripple_secret='${secret}', private_key='${privateKey}', public_key='${publicKey}' WHERE id=${result.insertId}`;
                        console.log(sql);
                        con.query(sql, function (err, info) {
                            if(err){
                                user.json({ "msg": "New data insert error", success: false });
                            }else{
                                user.json({ "msg": "User registered successfully", success: true, data: result });
                            }
                        });
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
            })
        }
    })
})

app.post('/login', function(req, res){
    var phone = req.body.phone;
    var password = req.body.password;
    var query = `SELECT * FROM user WHERE phone='${phone}' AND password='${password}'`;

    con.query(query, function (err, user) {
        if (err) {
            res.json({ success: false, msg: 'Server error' });
        } else {
            if (user.length === 0) {
                res.json({ success: false, msg: 'Invalid user information' });
            }
            else {
                res.json({ success: true, msg: 'login success', data: user });
            }
        }
    });
})

app.get('/info/:id', function(req,res){
    var address  = req.params.id;
	api.connect().then(() => {
        console.log('connected');
        api.getAccountInfo(address).then(info =>
        {
            console.log(info);
            res.json(info);
        });
    });
});

app.post('/payment', function(req, res){
    var from_address = req.body.from_address;
    var from_secret = req.body.from_secret;
    var to_address = req.body.to_address;
    var amount = req.body.amount;
    var currency = req.body.currency;
    const payment = {
        source: {
            address: from_address,
            maxAmount: {
                value: amount,
                currency: currency
            }
        },
        destination: {
            address: to_address,
            amount: {
                value: amount,
                currency: currency
            }
        }
    };
    api.connect().then(() => {
        api.preparePayment(from_address, payment, {maxLedgerVersionOffset: 5}).then(pre=>{
            console.log(pre);
            var prepared = pre;
            // Sign the payment using the sender's secret
            const { signedTransaction } = api.sign(prepared.txJSON, from_secret);
            console.log('Signed', signedTransaction);
            // Submit the payment
            api.submit(signedTransaction).then(result=>{
                console.log('Done', result.engine_result_code);
                if(result.engine_result_code === 0){
                    var query = `INSERT INTO transaction SET 
                                    from_address = '${result.tx_json.Account}',
                                    to_address = '${result.tx_json.Destination}',
                                    amount = '${result.tx_json.Amount}',
                                    txn_signature = '${result.tx_json.TxnSignature}',
                                    transaction_type = '${result.tx_json.TransactionType}'
                            `;
                    console.log(query);
                    con.query(query, function (err, txn) {
                        if (err) {
                            res.json({ success: false, msg: 'Database error'+err });
                        }else{
                            res.json(result);
                        }
                    });
                }else{
                    res.json(result);
                }
            });
        }).catch(error=>{
            res.json(error);
        });
    });
})

app.get('/history/:id', function(req,res){
    var address  = req.params.id;
    var query = `SELECT t.*, u_f.name AS from_name, u_t.name AS to_name FROM transaction AS t 
    INNER JOIN user AS u_f ON u_f.ripple_address = t.from_address 
    INNER JOIN user AS u_t ON u_t.ripple_address = t.to_address 
    WHERE u_f.ripple_address = '${address}'
    OR u_t.ripple_address = '${address}'`;

    console.log(query);
    con.query(query, function (err, result) {
        if (err) {
            res.json({ success: false, msg: 'Server error' });
        } else {
            res.json({ success: true, msg: 'trancastion history success', data: result });
        }
    });
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log(`Server running on ${port}`);
});
