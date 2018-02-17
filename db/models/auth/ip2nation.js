/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ip2nation', {
    ip: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'ip2nation'
  });
};
