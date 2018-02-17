/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserved_name', {
    name: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'reserved_name'
  });
};
