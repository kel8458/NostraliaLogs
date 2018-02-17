/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areatrigger_bg_entrance', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    team: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    bg_template: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    exit_map: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    exit_position_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    exit_position_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    exit_position_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    exit_orientation: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'areatrigger_bg_entrance'
  });
};
