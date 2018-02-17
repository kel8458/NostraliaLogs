/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creature_linking', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    master_guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    flag: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'creature_linking'
  });
};
