/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pet_levelstats', {
    creature_entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hp: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    mana: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    armor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    str: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    agi: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    sta: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    inte: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    spi: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'pet_levelstats'
  });
};
