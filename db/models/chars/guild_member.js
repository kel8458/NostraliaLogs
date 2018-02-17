/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guild_member', {
    guildid: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    guid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    rank: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pnote: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    offnote: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'guild_member'
  });
};
