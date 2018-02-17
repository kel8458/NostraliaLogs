/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_autoattack', {
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
    attackerGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    targetGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attackType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    damage: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hitoutcome: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attackerType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    targetType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'raidstats_autoattack'
  });
};
