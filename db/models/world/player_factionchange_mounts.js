/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_factionchange_mounts', {
    RaceId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    MountNum: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    ItemEntry: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    Comment: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'player_factionchange_mounts'
  });
};
