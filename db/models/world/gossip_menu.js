/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gossip_menu', {
    entry: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    text_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    condition_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'gossip_menu'
  });
};
