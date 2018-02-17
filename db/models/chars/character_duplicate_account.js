/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_duplicate_account', {
    account: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'character_duplicate_account'
  });
};
