/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('characters_item_delete', {
    entry: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'characters_item_delete'
  });
};
