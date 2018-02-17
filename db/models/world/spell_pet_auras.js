/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_pet_auras', {
    spell: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pet: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    aura: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'spell_pet_auras'
  });
};
