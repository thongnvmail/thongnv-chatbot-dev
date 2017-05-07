/*
Ban Can Co:

  1. Heroku account
  2. FB account
  3. FB page
  4. install/update node
  5. Heroku commad line 

*/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//
app.set('port',(process.env.PORT || 5000))
//
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//
app.get('/', function (req, res){
	res.send('Thongnv hello')
	})


//
app.get('/webhook/', function(req, res){
	if(req.query['hub.verify_token'] ==='thongnvbot'){
		res.send(req.query['hub.challenge'])
		}
	res.send('khong co gi');
	})
//
app.listen(app.get('port'), function(){
	console.log('Running on port', app.get('port'))
	})
