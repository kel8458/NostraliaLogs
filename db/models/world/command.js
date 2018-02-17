/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('command', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    security: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    help: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    flags: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'command'
  });
};
