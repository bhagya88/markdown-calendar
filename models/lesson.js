'use strict';
module.exports = function(sequelize, DataTypes) {
  var Lesson = sequelize.define('Lesson', {
    chapter: DataTypes.STRING,
    subject: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Lesson;
};