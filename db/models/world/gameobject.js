/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gameobject', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    map: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    position_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    position_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    position_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    orientation: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rotation0: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rotation1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rotation2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rotation3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    spawntimesecs: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    animprogress: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spawnFlags: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    visibilitymod: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'gameobject'
  });
};
