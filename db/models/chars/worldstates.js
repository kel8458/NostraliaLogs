/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('worldstates', {
    entry: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    value: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'worldstates'
  });
};
