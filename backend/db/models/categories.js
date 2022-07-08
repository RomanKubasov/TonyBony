'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate({activities}) {
      this.hasMany(activities, {foreignKey: 'category_id'});
    }
  }
  categories.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};
