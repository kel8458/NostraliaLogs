/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('map_loot_disabled', {
    mapid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'map_loot_disabled'
  });
};
