/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gameobject_respawn', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    respawntime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    instance: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    map: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'gameobject_respawn'
  });
};
