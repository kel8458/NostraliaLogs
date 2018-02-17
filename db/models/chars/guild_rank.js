/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guild_rank', {
    guildid: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    rid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    rname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    rights: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'guild_rank'
  });
};
