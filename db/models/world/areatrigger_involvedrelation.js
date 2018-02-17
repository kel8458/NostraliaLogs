/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areatrigger_involvedrelation', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    quest: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'areatrigger_involvedrelation'
  });
};
