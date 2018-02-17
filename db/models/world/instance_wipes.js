/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instance_wipes', {
    mapId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    creatureEntry: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'instance_wipes'
  });
};
