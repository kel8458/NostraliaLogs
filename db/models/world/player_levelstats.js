/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_levelstats', {
    race: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
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
    str: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    agi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    sta: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    inte: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    spi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'player_levelstats'
  });
};
