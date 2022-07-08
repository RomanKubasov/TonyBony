'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class types extends Model {
    static associate({skills}) {
      this.belongsTo(skills, {foreignKey: 'type_id'});
    }
  }
  types.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'types',
  });
  return types;
};