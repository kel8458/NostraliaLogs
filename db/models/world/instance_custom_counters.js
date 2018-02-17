/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instance_custom_counters', {
    index: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'instance_custom_counters'
  });
};
