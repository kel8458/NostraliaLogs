/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_kill', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    raidId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    killerGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    victimGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    killerType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    victimType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'raidstats_kill'
  });
};
