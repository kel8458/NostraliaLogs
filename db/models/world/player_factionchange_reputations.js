/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_factionchange_reputations', {
    alliance_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    horde_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'player_factionchange_reputations'
  });
};
