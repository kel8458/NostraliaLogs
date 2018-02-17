/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areatrigger_teleport', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    patch: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    required_level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    required_item: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    required_item2: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    required_quest_done: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    required_event: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    required_pvp_rank: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    required_team: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    required_failed_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    target_map: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    target_position_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    target_position_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    target_position_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    target_orientation: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'areatrigger_teleport'
  });
};
