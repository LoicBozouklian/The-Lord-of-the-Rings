import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
<<<<<<< Updated upstream
=======
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const ini = require('ini');
console.log(__dirname + '/../../../config.ini');
const config = ini.parse(fs.readFileSync(__dirname + '/../../../config.ini', 'utf-8'));
>>>>>>> Stashed changes

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

<<<<<<< Updated upstream
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Loic:121593Loic@cluster0-pqerw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
=======
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var BSONRegExp = mongodb.BSONRegExp;
const uri = "mongodb+srv://" + config.username + ":" + config.password +"@cluster0-pqerw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
>>>>>>> Stashed changes
client.connect(err => {
	var db = client.db("personnages-principaux");
	var collection = db.collection("personnages");

<<<<<<< Updated upstream
    var db = client.db("personnages-principaux");
    var collection = db.collection("personnages");
    
    var query = {};
    
    var cursor = collection.find(query);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
=======
	app.get("/personnages", (req, res) => {
		collection.find({}).toArray((err, docs) => {
			console.log(err, docs);
			res.send(docs);
		});
	});

	app.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	);

	app.listen(PORT, err => {
		if (err) console.log('error', err);
	});


	/*if (err) console.log("Connection failed du to :", err);
	
	var query = {
		"color": "green"
	};
	collection.find(query).toArray((err, docs) => {
		console.log(err, docs);
		client.close();
	});*/

>>>>>>> Stashed changes
});
