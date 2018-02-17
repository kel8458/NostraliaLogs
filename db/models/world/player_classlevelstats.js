/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_classlevelstats', {
    class: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    basehp: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    basemana: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'player_classlevelstats'
  });
};
