/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pet_name_generation', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    word: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    half: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'pet_name_generation'
  });
};
