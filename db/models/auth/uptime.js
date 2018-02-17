/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uptime', {
    realmid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    starttime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    startstring: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    uptime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    maxplayers: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    revision: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'Trinitycore'
    }
  }, {
    tableName: 'uptime'
  });
};
