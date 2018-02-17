/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('battlemaster_entry', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bg_template: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'battlemaster_entry'
  });
};
