import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const ini = require('ini');
console.log(__dirname+'/../../../config.ini');
const config = ini.parse(fs.readFileSync(__dirname+'/../../../config.ini', 'utf-8'));

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const app = express();
app.use(express.json({
	type: ['application/json', 'text/plain']
}));
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(cors());


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var BSONRegExp = mongodb.BSONRegExp;
const uri = "mongodb+srv://" + config.username + ":" + config.password +"@cluster0-pqerw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	if (err)console.log("erreur de connexion : ", err);

    var db = client.db("personnages-principaux");
	var collection = db.collection("hommes");
	
	app.get("/hommes", (req, res) => {
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
  
    var query = {
    };
	
	/*
    collection.find(query).toArray((err,docs)=>{
		console.log(err,docs);
		client.close();
	});
	*/
});

