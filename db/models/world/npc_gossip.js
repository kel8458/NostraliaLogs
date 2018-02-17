/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('npc_gossip', {
    npc_guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    textid: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'npc_gossip'
  });
};
