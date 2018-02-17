/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scripted_areatrigger', {
    entry: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    ScriptName: {
      type: DataTypes.CHAR(64),
      allowNull: false
    }
  }, {
    tableName: 'scripted_areatrigger'
  });
};
