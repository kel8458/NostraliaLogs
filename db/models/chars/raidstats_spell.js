/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_spell', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    casterGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    targetGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    raidId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    spellId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    damage: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    absorb: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    resist: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    blocked: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    casterType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    targetType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    hitresult: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    missInfo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    resistance: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    school: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'raidstats_spell'
  });
};
