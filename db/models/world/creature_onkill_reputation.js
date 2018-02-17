/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creature_onkill_reputation', {
    creature_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    RewOnKillRepFaction1: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    RewOnKillRepFaction2: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    MaxStanding1: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    IsTeamAward1: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    RewOnKillRepValue1: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    MaxStanding2: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    IsTeamAward2: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    RewOnKillRepValue2: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    TeamDependent: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'creature_onkill_reputation'
  });
};
