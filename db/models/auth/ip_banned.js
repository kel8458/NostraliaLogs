/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ip_banned', {
    ip: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '0.0.0.0',
      primaryKey: true
    },
    bandate: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    unbandate: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    bannedby: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '[Console]'
    },
    banreason: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'no reason'
    }
  }, {
    tableName: 'ip_banned'
  });
};
