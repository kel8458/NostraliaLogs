/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_display_info', {
    field0: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    field5: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'item_display_info'
  });
};
