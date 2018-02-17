/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_bgqueue', {
    PlayerGUID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    playerName: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    playerIP: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    BGtype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    action: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'character_bgqueue'
  });
};
