var router = require('express').Router();
var models  = require('../models');
var sequelizeConnection = models.sequelize;
var Sequelize = models.Sequelize;


// middleware that is specific to this router - logs time of request
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next();
});

// route for home page
router.get('/',function (req, res) {
	sequelizeConnection.sync()
		
	.then(function(req, res){
		console.log('/classes');
		console.log(req.body);
		return models.Class.findAll({
 attributes: ['lesson', 'subject']
});
	})
	.then(function(results){

			console.log(results);
			//res.render('index', {classes: results});
		  	// res.render('index',{
		  	// 	users: results
		  	// });
	});  	
  
});
	



// define route adding new burger also add the drink
router.put('/', function (req, res) {
	
});

module.exports = router;