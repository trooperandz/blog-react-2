'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Foreign key CategoryId in Post model
        // If a Category is deleted, remove all associated posts
        Post.belongsTo(models.Category,
          { onDelete: 'CASCADE' }
        );
      }
    }
  });
  return Post;
};