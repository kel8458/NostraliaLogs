/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areatrigger_tavern', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'areatrigger_tavern'
  });
};
