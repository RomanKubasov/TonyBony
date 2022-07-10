'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class strengths extends Model {
    static associate({types, activities}) {
      this.belongsTo(types, {foreignKey: 'type_id'});
      this.belongsToMany(activities, {through: 'activities_strengths'});
    }
  }
  strengths.init({
    strength: DataTypes.STRING,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'strengths',
  });
  return strengths;
};
