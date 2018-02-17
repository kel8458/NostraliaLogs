/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player_factionchange_quests', {
    alliance_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    horde_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'player_factionchange_quests'
  });
};
