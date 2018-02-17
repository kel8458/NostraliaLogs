/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playercreateinfo_spell', {
    race: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    class: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Spell: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Note: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'playercreateinfo_spell'
  });
};
