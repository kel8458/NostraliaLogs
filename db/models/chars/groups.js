/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groups', {
    groupId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    leaderGuid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      unique: true
    },
    mainTank: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    mainAssistant: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    lootMethod: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false
    },
    looterGuid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    lootThreshold: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false
    },
    icon1: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    icon2: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    icon3: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    icon4: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    icon5: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    icon6: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    icon7: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    icon8: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    isRaid: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'groups'
  });
};
