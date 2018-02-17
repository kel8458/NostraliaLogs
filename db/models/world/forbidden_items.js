/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forbidden_items', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    patch: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    AfterOrBefore: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'forbidden_items'
  });
};
