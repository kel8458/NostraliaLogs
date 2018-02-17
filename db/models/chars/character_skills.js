/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_skills', {
    guid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    skill: {
      type: DataTypes.INTEGER(9).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER(9).UNSIGNED,
      allowNull: false
    },
    max: {
      type: DataTypes.INTEGER(9).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'character_skills'
  });
};
