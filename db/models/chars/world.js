/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('world', {
    map: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'world'
  });
};
