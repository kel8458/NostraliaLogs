/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petition_sign', {
    ownerguid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    petitionguid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    playerguid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    player_account: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'petition_sign'
  });
};
