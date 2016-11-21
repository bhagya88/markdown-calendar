'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cohort = sequelize.define('Cohort', {
    cohort_name: DataTypes.STRING,
    campus: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cohort;
};