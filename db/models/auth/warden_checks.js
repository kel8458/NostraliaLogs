/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warden_checks', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    groupid: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    str: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    data: {
      type: DataTypes.STRING(48),
      allowNull: false,
      defaultValue: ''
    },
    address: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    length: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    result: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: ''
    },
    result2: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: ''
    },
    build: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'warden_checks'
  });
};
