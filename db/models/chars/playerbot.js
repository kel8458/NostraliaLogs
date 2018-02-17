/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playerbot', {
    char_guid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    chance: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '10'
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ai: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'playerbot'
  });
};
