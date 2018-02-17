/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gameobject_battleground', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    event1: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    event2: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'gameobject_battleground'
  });
};
