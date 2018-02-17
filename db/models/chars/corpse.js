/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corpse', {
    guid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    player: {
      type: DataTypes.INTEGER(11).UNSIGNED,
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
    map: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    corpse_type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    instance: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'corpse'
  });
};
