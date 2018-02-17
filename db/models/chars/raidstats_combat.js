/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_combat', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    raidId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    attackerGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    victimGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attackerType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    victimType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'raidstats_combat'
  });
};
