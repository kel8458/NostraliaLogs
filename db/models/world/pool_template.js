/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pool_template', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    max_limit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    flags: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    instance: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'pool_template'
  });
};
