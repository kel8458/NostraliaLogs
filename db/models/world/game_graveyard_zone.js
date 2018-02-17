/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game_graveyard_zone', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    ghost_zone: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    faction: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'game_graveyard_zone'
  });
};
