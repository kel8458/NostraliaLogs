/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('points_of_interest', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    icon: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    flags: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    data: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    icon_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'points_of_interest'
  });
};
