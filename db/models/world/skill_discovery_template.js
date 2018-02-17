/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_discovery_template', {
    spellId: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    reqSpell: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    chance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'skill_discovery_template'
  });
};
