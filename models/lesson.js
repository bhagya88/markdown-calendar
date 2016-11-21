'use strict';
module.exports = function(sequelize, DataTypes) {
  var Lesson = sequelize.define('Lesson', {
    subject: DataTypes.STRING,
    chapter: DataTypes.STRING,
    length: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Lesson;
};