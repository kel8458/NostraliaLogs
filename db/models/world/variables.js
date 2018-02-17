/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('variables', {
    index: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'variables'
  });
};
