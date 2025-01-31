'use strict';
const {
  Model
} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Post)
      this.hasMany(models.Comment)
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    displayPic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};