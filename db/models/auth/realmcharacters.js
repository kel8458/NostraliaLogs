/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realmcharacters', {
    realmid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    acctid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    numchars: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'realmcharacters'
  });
};
