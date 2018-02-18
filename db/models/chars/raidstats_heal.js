/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_heal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    raidId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    healerGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    targetGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    spellId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    healerType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    targetType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    rawHeal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    overHeal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    efficientHeal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isOverTime: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'raidstats_heal'
  });
};
