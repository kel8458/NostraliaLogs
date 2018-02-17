/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creature_groups', {
    leaderGUID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    memberGUID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dist: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    angle: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    flags: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'creature_groups'
  });
};
