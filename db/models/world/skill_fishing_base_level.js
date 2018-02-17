/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_fishing_base_level', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skill: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'skill_fishing_base_level'
  });
};
