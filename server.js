
var models  = require('./models');
var sequelizeConnection = models.sequelize;
var Sequelize = models.Sequelize;

// extract our sequelize connection from the models object, to avoid confusion
//var sequelizeConnection = models.sequelize;

	sequelizeConnection.sync()
		
	.then(function(){
		console.log("synced");
	})


