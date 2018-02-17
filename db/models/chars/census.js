/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('census', {
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    race: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    onlineCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'census'
  });
};
