/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('battleground_template', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    patch: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    MinPlayersPerTeam: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    MaxPlayersPerTeam: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    MinLvl: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    MaxLvl: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    AllianceWinSpell: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    AllianceLoseSpell: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    HordeWinSpell: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    HordeLoseSpell: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    AllianceStartLoc: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    AllianceStartO: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    HordeStartLoc: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    HordeStartO: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'battleground_template'
  });
};
