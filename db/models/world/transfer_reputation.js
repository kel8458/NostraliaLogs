/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfer_reputation', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    race: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    faction: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    standing: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'transfer_reputation'
  });
};
