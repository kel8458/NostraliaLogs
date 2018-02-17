/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game_event_gameobject', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    event: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'game_event_gameobject'
  });
};
