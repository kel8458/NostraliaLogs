/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_banned', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bandate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    unbandate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    bannedby: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    banreason: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    realm: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    gmlevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'account_banned'
  });
};
