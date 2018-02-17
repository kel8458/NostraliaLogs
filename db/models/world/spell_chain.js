/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_chain', {
    spell_id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    prev_spell: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    first_spell: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    rank: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    req_spell: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'spell_chain'
  });
};
