/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('characters_guid_delete', {
    guid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'characters_guid_delete'
  });
};
