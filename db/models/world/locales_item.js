/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locales_item', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name_loc1: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    name_loc2: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    name_loc3: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    name_loc4: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    name_loc5: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    name_loc6: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    name_loc7: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    name_loc8: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    description_loc1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_loc2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_loc3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_loc4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_loc5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_loc6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_loc7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_loc8: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'locales_item'
  });
};
