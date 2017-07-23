'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Foreign key CategoryId in Post model
        Category.hasMany(models.Post);
      }
    }
  });
  return Category;
};
