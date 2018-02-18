/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_lootpick', {
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
    looterGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sourceGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'raidstats_lootpick'
  });
};
