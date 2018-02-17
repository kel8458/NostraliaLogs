/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_threat', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Threat: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    multiplier: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1'
    },
    ap_bonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'spell_threat'
  });
};
