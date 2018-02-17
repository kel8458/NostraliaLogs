/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_extra_item_template', {
    spellId: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    requiredSpecialization: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    additionalCreateChance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    additionalMaxNum: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'skill_extra_item_template'
  });
};
