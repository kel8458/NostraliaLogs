/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_learn_spell', {
    entry: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    SpellID: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Active: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'spell_learn_spell'
  });
};
