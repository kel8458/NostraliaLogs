/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('map_template', {
    Entry: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Parent: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    MapType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    LinkedZone: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    LevelMin: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    LevelMax: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    MaxPlayers: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ResetDelay: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    GhostEntranceMap: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '-1'
    },
    GhostEntranceX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    GhostEntranceY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    MapName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    ScriptName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'map_template'
  });
};
