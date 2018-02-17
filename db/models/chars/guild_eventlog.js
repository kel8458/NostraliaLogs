/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guild_eventlog', {
    guildid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    LogGuid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    EventType: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    PlayerGuid1: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PlayerGuid2: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    NewRank: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    TimeStamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'guild_eventlog'
  });
};
