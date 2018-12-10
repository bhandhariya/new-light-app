var mongoose=require('mongoose');

var url='mongodb://localhost:27017/mentdoc-lite-db';

mongoose.connect(url,{useNewUrlParser:true},function(err){
	if(err){
		console.log('error in db maybe mongodb not started ')
	}
	console.log('db ready ')
});