/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('battleground_events', {
    map: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    },
    event1: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    event2: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'battleground_events'
  });
};
