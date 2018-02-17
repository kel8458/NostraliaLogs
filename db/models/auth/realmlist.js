/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realmlist', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    address: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '127.0.0.1'
    },
    localAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '127.0.0.1'
    },
    localSubnetMask: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '255.255.255.0'
    },
    port: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '8085'
    },
    icon: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    realmflags: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '2'
    },
    timezone: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    allowedSecurityLevel: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    population: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    gamebuild_min: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    gamebuild_max: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    flag: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '2'
    },
    realmbuilds: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'realmlist'
  });
};
