/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('script_waypoint', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    pointid: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    location_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    location_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    location_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    waittime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    point_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'script_waypoint'
  });
};
