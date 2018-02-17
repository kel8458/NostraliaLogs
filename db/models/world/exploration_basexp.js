/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exploration_basexp', {
    level: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    basexp: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'exploration_basexp'
  });
};
