/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_spell', {
    guid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    spell: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    active: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    disabled: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_spell'
  });
};
