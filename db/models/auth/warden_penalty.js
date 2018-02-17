/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warden_penalty', {
    groupId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    banTime: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'warden_penalty'
  });
};
