/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_combatstop', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    raidId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    bossGuid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    playerGuid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'raidstats_combatstop'
  });
};
