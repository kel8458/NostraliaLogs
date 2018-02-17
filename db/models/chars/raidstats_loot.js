/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidstats_loot', {
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
    sourceGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loot10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gold: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'raidstats_loot'
  });
};
