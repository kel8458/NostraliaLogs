/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_member', {
    groupId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    memberGuid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    assistant: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    subgroup: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'group_member'
  });
};
