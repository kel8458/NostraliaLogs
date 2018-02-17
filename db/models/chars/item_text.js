/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_text', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'item_text'
  });
};
